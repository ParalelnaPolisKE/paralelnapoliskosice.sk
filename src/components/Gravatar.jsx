import React from 'react';
import crypto from 'crypto';

export const Gravatar = ({ email }) => {
  const hashedEmail = crypto
    .createHash('md5')
    .update(email)
    .digest('hex');

  return (
    <img
      className="rounded-full shadow-md"
      src={`https://www.gravatar.com/avatar/${hashedEmail}?d=https%3A%2F%2Fwww.paralelnapoliskosice.sk%2Fapple-touch-icon.png`}
      height="80"
      width="80"
      alt="avatar"
    />
  );
};
