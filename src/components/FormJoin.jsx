import React from 'react';

export const FormJoin = ({ children, category }) => (
  <form
    name="join"
    method="POST"
    data-netlify="true"
    className="p-4 mb-8 bg-grey-lightest leading-none md:flex"
  >
    <textarea
      name="message"
      rows="10"
      className="text-sm border p-4 mb-2 md:m-0 w-full md:flex-1"
      defaultValue={children}
    />
    <div className="flex flex-col flex-1 md:ml-2">
      <input
        name="name"
        placeholder="tvoje meno"
        type="text"
        className="text-sm border p-4 mb-2"
        required
      />
      <input
        autoCapitalize="off"
        autoCorrect="off"
        name="email"
        placeholder="email"
        type="email"
        className="text-sm border p-4 mb-2"
        required
      />
      <input name="subject" type="hidden" value={category} />
      <input
        name="submit"
        type="submit"
        value="Chcem sa zapojiť!"
        className="text-xs font-semibold uppercase p-4 bg-grey-dark text-white hover:bg-grey-darker cursor-pointer"
      />
    </div>
  </form>
);
