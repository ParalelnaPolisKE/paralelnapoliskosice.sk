import React from 'react';
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot';
import { capitalizeFirst } from 'utils';

export const EventItem = ({
  id,
  name,
  description,
  eventDate,
  timeRange,
  place,
}) => (
  <div key={id} className="max-w-md mb-2">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-1">
        <a href={`https://www.facebook.com/events/${id}/`}>{name}</a>
      </div>
      <div className="text-l mb-2">
        {capitalizeFirst(eventDate)}, {timeRange}, {place}
      </div>
      <div className="text-grey-darker text-base">
        <Dotdotdot clamp={2}>{description}</Dotdotdot>
      </div>
    </div>
  </div>
);

EventItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  eventDate: PropTypes.string.isRequired,
  timeRange: PropTypes.string.isRequired,
  place: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
