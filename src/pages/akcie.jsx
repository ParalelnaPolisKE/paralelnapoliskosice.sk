import React from 'react';
import { isFuture, isToday } from 'date-fns';

import { Page } from 'components/Page';
import { FBEventsList } from 'components/FBEventsList';
import { graphql } from 'gatsby';

export default ({
  data: {
    allFacebookEvents: { edges: events },
  },
}) => {
  const todayEvents = events.filter(event =>
    isToday(event.node.start_time)
  );

  const futureEvents = events.filter(event =>
    !isToday(event.node.start_time) && isFuture(event.node.start_time)
  );

  const pastEvents = events.filter(
    event => !isToday(event.node.start_time) && !isFuture(event.node.start_time)
  );

  return (
    <Page title="Akcie" url="/akcie">
      {todayEvents && todayEvents.length > 0 &&  (
        <>
          <div className="font-bold text-xl mb-1">Dnes:</div>
          <FBEventsList events={todayEvents} />
        </>
      )}

      {futureEvents && futureEvents.length > 0 && (
        <>
          <div className="font-bold text-xl mb-1">Pripravované akcie:</div>
          <FBEventsList events={futureEvents} />
        </>
      )}

      {pastEvents && pastEvents.length > 0 &&  (
        <>
          <div className="font-bold text-xl mb-1">Minulé akcie:</div>
          <FBEventsList events={pastEvents} />
        </>
      )}
    </Page>
  );
};

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
          startDateLocal: start_time(
            formatString: "dddd DD.MM.YYYY"
            locale: "sk"
          )
          place {
            id
            name
          }
        }
      }
    }
  }
`;
