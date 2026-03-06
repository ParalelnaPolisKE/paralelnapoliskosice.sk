import { useState, useEffect, useCallback, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { calculatePrice } from "../lib/pricing.js";
import BookingModal from "./BookingModal.jsx";
import "./Calendar.css";

const CALENDAR_API_URL = import.meta.env.PUBLIC_CALENDAR_API_URL || "https://calendar-api.ppke.sk";
const POLL_INTERVAL = 30_000;

const STATUS_CLASS_MAP = {
  confirmed: "event-confirmed",
  processing: "event-processing",
  pending_payment: "event-pending",
  expired: "event-expired",
};

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [selection, setSelection] = useState(null);
  const [error, setError] = useState(null);
  const [successEventId, setSuccessEventId] = useState(null);
  const calendarRef = useRef(null);

  const fetchEvents = useCallback(async () => {
    try {
      const calApi = calendarRef.current?.getApi();
      const start = calApi
        ? calApi.view.activeStart.toISOString()
        : new Date().toISOString();
      const end = calApi
        ? calApi.view.activeEnd.toISOString()
        : new Date(Date.now() + 7 * 86400000).toISOString();

      const res = await fetch(
        `${CALENDAR_API_URL}/events?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`
      );
      if (!res.ok) return;
      const data = await res.json();
      setEvents(
        data.map((ev) => ({
          id: ev.id,
          title: ev.title,
          start: ev.start,
          end: ev.end,
          classNames: [STATUS_CLASS_MAP[ev.status] || "event-pending"],
          extendedProps: { status: ev.status },
        }))
      );
    } catch {
      // Silently fail — calendar still usable
    }
  }, []);

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchEvents]);

  // Detect ?paid={eventId} query param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paidId = params.get("paid");
    if (paidId) {
      setSuccessEventId(paidId);
      // Clean URL
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  function handleSelect(info) {
    setError(null);
    const start = info.start;
    const end = info.end;

    // Validate
    const { errors } = calculatePrice(start, end);
    if (errors.length > 0) {
      setError(errors[0]);
      const calApi = calendarRef.current?.getApi();
      if (calApi) calApi.unselect();
      return;
    }

    setSelection({ start, end });
  }

  function handleModalClose() {
    setSelection(null);
    const calApi = calendarRef.current?.getApi();
    if (calApi) calApi.unselect();
  }

  function handleBookingComplete() {
    setSelection(null);
    fetchEvents();
  }

  return (
    <div className="calendar-wrapper">
      {successEventId && (
        <div className="success-banner">
          Platba prijata! Vasa rezervacia bola potvrdena.
        </div>
      )}

      {error && (
        <div className="error-message" style={{ marginBottom: "1em" }}>
          {error}
        </div>
      )}

      <FullCalendar
        ref={calendarRef}
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        locale="sk"
        firstDay={1}
        slotMinTime="06:00:00"
        slotMaxTime="22:00:00"
        slotDuration="01:00:00"
        allDaySlot={false}
        selectable={true}
        selectMirror={true}
        selectOverlap={false}
        selectConstraint={{ startTime: "06:00", endTime: "22:00" }}
        unselectAuto={false}
        events={events}
        select={handleSelect}
        datesSet={fetchEvents}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek,timeGridDay",
        }}
        buttonText={{
          today: "dnes",
          week: "tyden",
          day: "den",
        }}
        height="auto"
        nowIndicator={true}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
        slotLabelFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
      />

      {selection && (
        <BookingModal
          start={selection.start}
          end={selection.end}
          onClose={handleModalClose}
          onComplete={handleBookingComplete}
          calendarApiUrl={CALENDAR_API_URL}
        />
      )}
    </div>
  );
}
