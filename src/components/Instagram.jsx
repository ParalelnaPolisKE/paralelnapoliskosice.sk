import React from 'react';

import css from './Instagram.module.css';

import InstagramImages from 'components/InstagramImages';

export const Instagram = () => (
  <div className="bg-grey-darker py-4 px-2 flex justify-center">
    <InstagramImages>
      {images =>
        images.map((image, i) => (
          <div key={i} className={css.instaImage}>
            {image}
          </div>
        ))
      }
    </InstagramImages>
  </div>
);
