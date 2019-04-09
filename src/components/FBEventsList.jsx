import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { EventItem } from 'components/EventItem';

export const FBEventsList = ({ events }) => {
  return events.map(({ node: event }) => {
    const timeRange = event.end_time
      ? `${format(event.start_time, 'HH:mm')} - ${format(
          event.end_time,
          'HH:mm'
        )}`
      : format(event.start_time, 'HH:mm');

    const placeName = event.place ? event.place.name : '';
    const placeId = event.place && event.place.id;
    const placeLink = placeId ? (
      <a href={`https://facebook.com/profile.php?id=${placeId}`}>{placeName}</a>
    ) : (
      placeName
    );

    // Ugly hack until we can get correct FB event ID - `gatsby-source-facebook` overwrites it
    const eventId = JSON.parse(event.internal.content).id;

    return (
      <EventItem
        key={eventId}
        eventId={eventId}
        name={event.name}
        description={event.description}
        eventDate={event.start_time}
        eventDateLocal={event.startDateLocal}
        timeRange={timeRange}
        place={placeLink}
      />
    );
  });
};

FBEventsList.propTypes = {
  events: PropTypes.array.isRequired,
};
