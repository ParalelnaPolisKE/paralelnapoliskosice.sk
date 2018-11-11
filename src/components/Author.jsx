import React from 'react';
import { Gravatar } from './Gravatar';

export const Author = ({ id: name, email, info, web, twitter }) => {
  return (
    <div className="flex text-sm text-grey-darker bg-grey-lightest p-4">
      <div>
        <Gravatar email={email ? email : ''} />
      </div>
      <div className="ml-4 flex-1 flex flex-col justify-center">
        <span>
          <strong className="text-grey-secondary">
            {web ? <a href={web}>{name}</a> : name}
          </strong>
          {twitter && (
            <a href={`https://www.twitter.com/${twitter}`} className="ml-2">
              @{twitter}
            </a>
          )}
        </span>
        {!!info && <p className="m-0 text-xs">{info}</p>}
      </div>
    </div>
  );
};
