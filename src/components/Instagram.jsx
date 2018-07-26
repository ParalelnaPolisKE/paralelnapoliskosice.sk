import React from 'react';

import css from './Instagram.module.css';

import { Container } from 'components/Container';
import InstagramImages from 'components/InstagramImages';

export const Instagram = () => (
  <div className={css.instagram}>
    <Container className={css.instaContainer}>
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
