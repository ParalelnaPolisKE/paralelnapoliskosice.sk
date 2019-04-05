import React from 'react';
import { isFuture } from 'date-fns';

import { Page } from 'components/Page';
import { FBEventsList } from 'components/FBEventsList';
import { graphql } from 'gatsby';

export default ({
  data: {
    allFacebookEvents: { edges: events },
  },
}) => (
  <Page title="Akcie" url="/akcie">
    <div className="font-bold text-xl mb-1">Pripravované akcie</div>
    {events && <FBEventsList events={events} filter={(event => isFuture(new Date(event.node.start_time)))} />}
    <div className="font-bold text-xl mb-1">Minulé akcie</div>
    {events && <FBEventsList events={events} filter={(event => !isFuture(new Date(event.node.start_time)))} />}
  </Page>
);

export const query = graphql`
  {
    allFacebookEvents {
      edges {
        node {
          id
          name
          description
          start_time
          end_time
          place {
            id
            name
          }
        }
      }
    }
  }
`;
