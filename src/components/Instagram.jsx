import React from 'react';

import css from './Instagram.module.css';

import InstagramImages from 'components/InstagramImages';

export const Instagram = () => (
  <div className="bg-grey-dark md:py-4 md:px-2 flex justify-center">
    <InstagramImages>
      {images =>
        images.map((image, i) => (
          <div key={i} className={`${css.instaImage} md:mx-2`}>
            {image}
          </div>
        ))
      }
    </InstagramImages>
  </div>
);
