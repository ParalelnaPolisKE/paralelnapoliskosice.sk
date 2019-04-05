import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import sk from 'date-fns/locale/sk';

import { EventItem } from 'components/EventItem';

export const FBEventsList = ({ events, filter = event => event }) => {
  return events.filter(filter).map(({ node: event }) => {
    const startTime = new Date(event.start_time);
    const endTime = event.end_time ? new Date(event.end_time) : null;
    const eventDate = format(new Date(event.start_time), 'dddd DD.MM.YYYY', {
      locale: sk,
    });

    const timeRange = endTime
      ? `${format(startTime, 'HH:mm')} - ${format(endTime, 'HH:mm')}`
      : format(startTime, 'HH:mm');

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
        eventDate={eventDate}
        timeRange={timeRange}
        place={placeLink}
      />
    );
  });
};

FBEventsList.propTypes = {
  events: PropTypes.array.isRequired,
  filter: PropTypes.func,
};
