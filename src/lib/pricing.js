import pricing from "../data/pricing.json";

/**
 * Get the hourly rate for a specific day and hour.
 * @param {number} dayIndex - JS day index (0=Sun, 1=Mon, ...)
 * @param {number} hour - Hour (0-23)
 * @returns {number|null} Price per hour in EUR, or null if unavailable
 */
export function getHourlyRate(dayIndex, hour) {
  const dayRates = pricing.rates[String(dayIndex)];
  if (!dayRates) return null;

  if (hour < pricing.availableHours.start || hour >= pricing.availableHours.end) {
    return null;
  }

  for (const slot of dayRates.slots) {
    if (hour >= slot.from && hour < slot.to) {
      return slot.price;
    }
  }

  return null;
}

/**
 * Calculate the total price for a booking.
 * @param {Date|string} start
 * @param {Date|string} end
 * @param {number} extraPersons - Non-member persons (surcharge applies)
 * @param {boolean} isWholeDay - Whether this is a whole-day booking
 * @returns {{ total: number, breakdown: Array<{hour: number, rate: number}>, errors: string[] }}
 */
export function calculatePrice(start, end, extraPersons = 0, isWholeDay = false) {
  const s = new Date(start);
  const e = new Date(end);
  const errors = [];
  const breakdown = [];

  const startHour = s.getHours();
  const endHour = e.getHours();
  const dayIndex = s.getDay();
  const dayRates = pricing.rates[String(dayIndex)];

  // Same-day constraint
  if (s.toDateString() !== e.toDateString()) {
    errors.push("Rezervácia musí byť v rámci jedného dňa.");
    return { total: 0, breakdown, errors };
  }

  // Available hours
  if (startHour < pricing.availableHours.start || endHour > pricing.availableHours.end) {
    errors.push(
      `Dostupné hodiny sú ${pricing.availableHours.start}:00 – ${pricing.availableHours.end}:00.`
    );
  }

  const durationHours = (e - s) / (1000 * 60 * 60);

  // Minimum duration
  if (durationHours < pricing.minimumHours) {
    errors.push(`Minimálna doba prenájmu je ${pricing.minimumHours} hodiny.`);
  }

  if (errors.length > 0) {
    return { total: 0, breakdown, errors };
  }

  // Whole-day pricing
  if (isWholeDay && dayRates) {
    return {
      total: dayRates.wholeDay,
      breakdown: [{ label: `Celý deň (${dayRates.label})`, rate: dayRates.wholeDay }],
      errors,
    };
  }

  // Hourly pricing
  let total = 0;
  for (let h = startHour; h < endHour; h++) {
    const rate = getHourlyRate(dayIndex, h);
    if (rate === null) {
      errors.push(`Hodina ${h}:00 nie je dostupná.`);
      continue;
    }
    const hourTotal = rate + extraPersons * pricing.nonMemberSurcharge;
    breakdown.push({
      label: `${h}:00 – ${h + 1}:00`,
      rate,
      surcharge: extraPersons > 0 ? extraPersons * pricing.nonMemberSurcharge : 0,
      hourTotal,
    });
    total += hourTotal;
  }

  return { total, breakdown, errors };
}
