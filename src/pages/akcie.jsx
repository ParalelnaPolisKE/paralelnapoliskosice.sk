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
          <p>{event.description}</p>
        </div>
      ))}
    </Page>
  );
};
