import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, baseURL } from "../utils/api";
import List from "./movies/List";
import Pagination from "./pagination/Pagination";

export default function Person() {
  const [person, setPerson] = useState("");
  const [personMovies, setPersonMovie] = useState([]);
  const { id } = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = `${person.name}`;
  });

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const persons = await Axios.get(
          `${baseURL}/person/${id}?api_key=${API_KEY}`
        );
        const person = persons.data;
        setPerson(person);

        const personMovies = await Axios.get(
          `${baseURL}/discover/movie?api_key=${API_KEY}&with_cast=${id}&page=${page}&sort_by=popularity.desc`
        );
        const personMovie = personMovies.data;
        setPersonMovie(personMovie);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchCastData();
  }, [id, page]);
  return (
    <div className="p-top-7">
      {
        <div className="container-xl">
          <div className="d-flex align-items-center">
            <div className="single-movie-poster ">
              <img
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
              />
            </div>
            <div className="pl-5">
              <h2 className="title-lg">{person.name}</h2>
              <h3 style={{ fontSize: "1.5rem" }}>Biography</h3>
              <p className="font-sm text-secondary">{person.biography}</p>
            </div>
          </div>

          <div className="pt-4">
            <p className="title-lg">personal Info.</p>
            <div className="d-flex">
              <div>
                <div className="px-3">
                  <h3 className="cast-name">Known for</h3>
                  <p className="text-secondary">
                    {person.known_for_department}
                  </p>
                </div>
                <div className="px-3 pb-2">
                  <p className="cast-name">Known Credit</p>
                  <h3 className="text-secondary">{person.popularity}</h3>
                </div>
                <div className="px-3 pb-2">
                  <p className="cast-name">Gender</p>
                  <h3 className="text-secondary">
                    {person.gender === 1 ? "Female" : "Male"}
                  </h3>
                </div>
                <div className="px-3 pb-2">
                  <p className="cast-name">Birthday</p>
                  <h3 className="text-secondary">{person.birthday}</h3>
                </div>
                <div className="px-3 pb-2">
                  <p className="cast-name">Place of Birth</p>
                  <h3 className="text-secondary">{person.place_of_birth}</h3>
                </div>
              </div>
              <div className="px-3 pb-2">
                <p className="cast-name">Also Known as</p>
                {person.also_known_as
                  ? person.also_known_as.map((known, i) => {
                      return (
                        <h3 className="text-secondary" key={i}>
                          {known}
                        </h3>
                      );
                    })
                  : "-"}
              </div>
            </div>
          </div>
        </div>
      }
      <div className="container-xl pt-5">
        <h3 className="title-lg">Known For</h3>
      </div>
      <List movieList={personMovies.results} />
      <Pagination
        setPage={setPage}
        page={page}
        nextPreviousPage={personMovies}
      />
    </div>
  );
}
