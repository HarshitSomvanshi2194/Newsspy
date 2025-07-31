import React from 'react';
import { useGlobalContext } from './context';

const Search = () => {
  const { query, searchPost } = useGlobalContext();

  return (
    <div>
      <h1>Newsspy Website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
