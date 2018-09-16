import React from 'react';

import css from './Instagram.module.css';

import { Container } from 'components/Container';
import InstagramImages from 'components/InstagramImages';

export const Instagram = () => (
  <div className="bg-grey-darker py-4">
    <Container className="flex justify-center overflow-hidden">
      <InstagramImages>
        {images =>
          images.map((image, i) => (
            <div key={i} className={css.instaImage}>
              {image}
            </div>
          ))
        }
      </InstagramImages>
    </Container>
  </div>
);
