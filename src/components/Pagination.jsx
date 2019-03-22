import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

export const Pagination = ({ prefix, pagesCount, currentPage }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === pagesCount;
  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <>
      <Helmet>
        {!isFirst && <link rel="first" href={`${prefix}`} />}
        {!isFirst && <link rel="prev" href={`${prefix}/${prevPage}`} />}
        {!isLast && <link rel="next" href={`${prefix}/${nextPage}`} />}
        {!isLast && <link rel="last" href={`${prefix}/${pagesCount}`} />}
      </Helmet>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {Array.from({ length: pagesCount }, (_, i) => (
          <li key={`pagination-number${i + 1}`}>
            <Link to={`${prefix}/${i === 0 ? '' : i + 1}`}>{i + 1}</Link>
          </li>
        ))}
      </ul>
      {!isFirst && (
        <Link to={`${prefix}/${prevPage}`} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={`${prefix}/${nextPage}`} rel="next">
          Next Page →
        </Link>
      )}
    </>
  );
};
