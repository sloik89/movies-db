import React from "react";
import { useGlobalContext } from "./context";
const Form = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search movies</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default Form;
