import React from 'react';
import { Link, navigate } from 'gatsby';
import Helmet from 'react-helmet';

export const Pagination = ({
  prefix,
  pagesCount,
  currentPage,
  showSelect = true,
}) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === pagesCount;
  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  const selectPage = e =>
    navigate(e.target.value ? `${prefix}/${e.target.value}` : prefix);

  return (
    <>
      <Helmet>
        {!isFirst && <link rel="first" href={`${prefix}`} />}
        {!isFirst && <link rel="prev" href={`${prefix}/${prevPage}`} />}
        {!isLast && <link rel="next" href={`${prefix}/${nextPage}`} />}
        {!isLast && <link rel="last" href={`${prefix}/${pagesCount}`} />}
      </Helmet>


      <div className="flex py-4 mt-10 relative">
        {!isFirst && (
          <Link to={`${prefix}/${prevPage}`} rel="prev" className="flex-1">
            ← Novšie príspevky
          </Link>
        )}
        {!isLast && (
          <Link
            to={`${prefix}/${nextPage}`}
            rel="next"
            className="flex-1 text-right"
          >
            Staršie príspevky →
          </Link>
        )}
      </div>

    </>
  );
};
