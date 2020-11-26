import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, baseURL } from "../utils/api";
import List from "./List";

export default function Person() {
  const [person, setPerson] = useState("");
  const [personMovies, setPersonMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const persons = await Axios.get(
          `${baseURL}/person/${id}?api_key=${API_KEY}`
        );
        const person = persons.data;
        console.log(person, "persons");
        setPerson(person);

        const personMovies = await Axios.get(
          `${baseURL}/discover/movie?api_key=${API_KEY}&with_cast=${id}&sort_by=popularity.desc`
        );
        const personMovie = personMovies.data.results;
        console.log(personMovie, "personMovie is here");
        setPersonMovie(personMovie);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchCastData();
  }, [id]);
  return (
    <div className="pt-5">
      {
        <div className="d-flex">
          <img
            src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
            alt={person.name}
          />
          <div>
            <h2>{person.name}</h2>
            <h3>biography</h3>
            <p>{person.biography}</p>
            <div>
              <p>personal Info.</p>

              <div>
                <p>Known for</p>
                <h3>{person.known_for_department}</h3>
              </div>
              <div>
                <p>Known Credit</p>
                <h3>h</h3>
              </div>
              <div>
                <p>Gender</p>
                <h3>{person.gender === 1 ? "Female" : "Male"}</h3>
              </div>
              <div>
                <p>Birthday</p>
                <h3>{person.birthday}</h3>
              </div>
              <div>
                <p>Place of Birth</p>
                <h3>{person.place_of_birth}</h3>
              </div>
              <div>
                <p>Also Known as</p>
                {/* {person.also_known_as.map((known, i) => {
                  return <h3 key={i}>{known}</h3>;
                })} */}
              </div>
            </div> 
          </div>
        </div>
      }
      <h3>Known For</h3>
      <List movieList={personMovies} />
    </div>
  );
}
