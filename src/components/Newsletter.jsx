import React from 'react';

export const Newsletter = () => (
  <form
    action="https://paralelnapoliskosice.us19.list-manage.com/subscribe/post"
    method="POST"
  >
    <input type="hidden" name="u" value="8affbd08463d07e25a8bbcca4" />
    <input type="hidden" name="id" value="b02c302d92" />
    <input
      autoCapitalize="off"
      autoCorrect="off"
      id="MERGE0"
      name="MERGE0"
      placeholder="email"
      size="25"
      type="email"
      className="p-4 m-1"
    />
    <input
      type="text"
      name="MERGE1"
      id="MERGE1"
      size="25"
      placeholder="meno"
      className="p-4 m-1"
    />
    <input
      type="submit"
      name="submit"
      value="Odoberať"
      className="p-4 m-1 bg-grey-dark text-white hover:bg-grey-darker cursor-pointer"
    />
  </form>
);
