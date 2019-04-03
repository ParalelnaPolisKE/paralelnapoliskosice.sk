import React, { useState, useEffect } from 'react';
import Dotdotdot from 'react-dotdotdot'
import {
  format
} from 'date-fns';
import sk from 'date-fns/locale/sk';

import { getEvents, capitalizeFirst } from 'utils';

import { Page } from 'components/Page';
import { EventsListError } from 'components/EventsListError';
import { useStaticQuery, graphql } from 'gatsby';

const initialState = {
  error: null,
  events: [],
};

export default () => {
  const [state, setState] = useState(initialState);

  const {
    site: {
      siteMetadata: { facebookAccessToken },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          facebookAccessToken
        }
      }
    }
  `);

  console.log(facebookAccessToken);

  // TODO: prevent calling getEvents twice
  useEffect(
    () => {
      (async () => {
        const events = await getEvents(facebookAccessToken);
        console.log('events', events);
        if (!events) return;

        setState({ events, error: null });
      })();
    },
    [state.events.length]
  );

  return (
    <Page title="Akcie" url="/akcie">
      {state.error && <EventsListError />}
      {state.events && state.events.map(event => {
        const startTime = new Date(event.start_time)
        const endTime = event.end_time ? new Date(event.end_time) : null
        const eventDate = format(new Date(event.start_time), 'dddd DD.MM.', {
          locale: sk,
        });

        const timeRange = endTime ? `${format(startTime, 'HH:mm')} - ${format(endTime, 'HH:mm')}` : format(startTime, 'HH:mm')

        const place = event.place ? event.place.name : ''

        return (
          <div key={event.id} className="max-w-md mb-2">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-1"><a href={`https://www.facebook.com/events/${event.id}/`}>{event.name}</a></div>
              <div class="text-l mb-2">{capitalizeFirst(eventDate)}, {timeRange}, {place}</div>
              <p class="text-grey-darker text-base">
                <Dotdotdot clamp={2}>{event.description}</Dotdotdot>
              </p>
            </div>
          </div>
        );
      })}
    </Page>
  );
};
