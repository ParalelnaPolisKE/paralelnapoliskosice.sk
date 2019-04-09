import React from 'react';
import PropTypes from 'prop-types';

export const EventItem = ({
  eventId,
  name,
  description,
  eventDate,
  eventDateLocal,
  timeRange,
  place,
}) => (
  <>
    <h3>
      <a href={`https://www.facebook.com/events/${eventId}`}>{name}</a>
    </h3>
    <div className="mb-2 capitalize">
      <time dateTime={eventDate} className="text-grey-darker">
        {eventDateLocal}
      </time>
      , <b>{timeRange}</b>, {place}
    </div>
    <div className="mb-8">{description.slice(0, 280)}...</div>
  </>
);

EventItem.propTypes = {
  eventId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  eventDate: PropTypes.string.isRequired,
  eventDateLocal: PropTypes.string.isRequired,
  timeRange: PropTypes.string.isRequired,
  place: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
