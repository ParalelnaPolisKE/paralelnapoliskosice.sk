import React from 'react';

import { Container } from './Container';
import { CryptoAddresses } from './CryptoAddresses';
import { Logo } from './Logo';
import { Social } from './Social';

export const Footer = () => (
  <footer role="contentinfo" className="bg-grey-primary text-sm px-4">
    <Container className="py-10 md:flex md:items-center">
      <div>
        <form
          action="https://paralelnapoliskosice.us19.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="8affbd08463d07e25a8bbcca4" />
          <input type="hidden" name="id" value="b02c302d92" />
          <input
            type="email"
            autoCapitalize="off"
            autoCorrect="off"
            name="MERGE0"
            id="MERGE0"
            size="25"
          />
          <input type="text" name="MERGE1" id="MERGE1" size="25" />
          <input type="submit" name="submit" value="Subscribe to list" />
        </form>
      </div>

      <div className="flex-1">
        <p>
          <strong>Podporte nás!</strong>
          <br />
          Budeme vďační za akúkoľvek podporu. Prijímame:
        </p>

        <CryptoAddresses />
        <Social />

        <p className="font-light">
          designed by <a href="https://www.matusdesign.com">matusdesign.com</a>
        </p>
      </div>

      <div className="text-center">
        <Logo />
      </div>
    </Container>
  </footer>
);
