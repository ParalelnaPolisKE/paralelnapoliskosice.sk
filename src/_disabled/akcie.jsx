// import React from 'react';
// import { isFuture, isToday } from 'date-fns';

// import { Page } from 'components/Page';
// import { FBEventsList } from 'components/FBEventsList';
// import { graphql } from 'gatsby';

// export default ({
//   data: {
//     allFacebookEvents: { edges: events },
//   },
// }) => {
//   const todayEvents = events.filter(event => isToday(event.node.start_time));

//   const futureEvents = events.filter(
//     event => !isToday(event.node.start_time) && isFuture(event.node.start_time)
//   );

//   const pastEvents = events.filter(
//     event => !isToday(event.node.start_time) && !isFuture(event.node.start_time)
//   );

//   return (
//     <Page title="Akcie" url="/akcie">
//       <div className="max-w-md m-auto">
//         {todayEvents && todayEvents.length > 0 && (
//           <>
//             <h2>Dnes</h2>
//             <FBEventsList events={todayEvents} />
//           </>
//         )}

//         {futureEvents && futureEvents.length > 0 && (
//           <>
//             <h2>Pripravované akcie</h2>
//             <FBEventsList events={futureEvents} />
//           </>
//         )}

//         {pastEvents && pastEvents.length > 0 && (
//           <>
//             <h2>Minulé akcie</h2>
//             <FBEventsList events={pastEvents} />
//           </>
//         )}
//       </div>
//     </Page>
//   );
// };

// export const query = graphql`
//   {
//     allFacebookEvents {
//       edges {
//         node {
//           internal {
//             content
//           }
//           name
//           description
//           start_time
//           end_time
//           startDateLocal: start_time(
//             formatString: "dddd DD. MMMM YYYY"
//             locale: "sk"
//           )
//           place {
//             id
//             name
//           }
//         }
//       }
//     }
//   }
// `;
