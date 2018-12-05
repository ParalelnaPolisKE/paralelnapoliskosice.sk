import React from 'react';

import css from './Instagram.module.css';

import InstagramImages from 'components/InstagramImages';

export const Instagram = () => (
  <div className="bg-grey-dark -mx-1 flex flex-wrap">
    <InstagramImages>
      {images =>
        images.map((image, i) => (
          <div key={i} className={`${css.instaImage} p-1 w-1/3`}>
            {image}
          </div>
        ))
      }
    </InstagramImages>
  </div>
);
