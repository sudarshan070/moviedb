import Axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams, NavLink } from "react-router-dom";
import { API_KEY, baseURL } from "../utils/api";

export default function Cast() {
  const [casts, setCasts] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const credits = await Axios.get(
          `${baseURL}/movie/${id}/credits?api_key=${API_KEY}`
        );
        const credit = credits.data;
        console.log(credit, "credits");
        setCasts(credit);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchCastData();
  }, [id]);

  return (
    <div className="pt-5">
      <h2>Cast and Crew</h2>
      {console.log(casts)}
      <div className="d-flex">
        <div>
          <p>Cast {casts && casts.cast.length}</p>
          {casts
            ? casts.cast.map((cast, i) => {
                return (
                  <NavLink
                    to={`/person/${cast.id}`}
                    key={i}
                    className="d-flex"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                      alt={cast.name}
                    />
                    <div>
                      <h3>{cast.name}</h3>
                      <p>{cast.character}</p>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
        <div>
          <p>Crew {casts && casts.crew.length}</p>
          {casts
            ? casts.crew.map((crew, i) => {
                return (
                  <div key={i}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${crew.profile_path}`}
                      alt={crew.name}
                    />
                    <div>
                      <h3>{crew.name}</h3>
                      <p>{crew.department}</p>
                    </div>

                    <p></p>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
