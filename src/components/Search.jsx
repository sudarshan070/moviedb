// import Axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

function Search(props) {
  const [searchMovies, setSearchMovies] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    if (searchMovies.length === 0) {
      return;
    }
    setSearchMovies("");
    props.history.push(`/search/${searchMovies}`);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setSearchMovies(e.target.value)}
          value={searchMovies}
          type="text"
          className="form-control"
          placeholder="search movie..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default withRouter(Search);
