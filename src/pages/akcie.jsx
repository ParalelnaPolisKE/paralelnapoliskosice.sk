import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';

import { getEvents } from 'utils';

import { Page } from 'components/Page';
import { EventsListError } from 'components/EventsListError';
import { useStaticQuery, graphql } from 'gatsby';

const initialState = {
  error: null,
  events: []
}

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
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>

      {state.error && <EventsListError />}
      {state.events.map(event => (
        <div key={event.id}>
          <p>{event.id}</p>
          <p>{event.name}</p>
          <p>{event.start_time}</p>
          <p>{event.end_time}</p>
          {event.place && <pre><code>{JSON.stringify(event.place, null, '\t')}</code></pre>}
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </Page>
  );
};
