import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { EventItem } from 'components/EventItem';

export const FBEventsList = ({ events }) => {
  return events.map(({ node: event }) => {
    const timeRange = event.end_time
      ? `${format(event.start_time, 'HH:mm')} - ${format(event.end_time, 'HH:mm')}`
      : format(event.start_time, 'HH:mm');

    const placeName = event.place ? event.place.name : '';
    const placeId = event.place && event.place.id;
    const placeLink = placeId ? (
      <a href={`https://facebook.com/profile.php?id=${placeId}`}>{placeName}</a>
    ) : (
      placeName
    );

    return (
      <EventItem
        key={event.id}
        id={event.id}
        name={event.name}
        description={event.description}
        eventDate={event.startDateLocal}
        timeRange={timeRange}
        place={placeLink}
      />
    );
  });
};

FBEventsList.propTypes = {
  events: PropTypes.array.isRequired,
};
