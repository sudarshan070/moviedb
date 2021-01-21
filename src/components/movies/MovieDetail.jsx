import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, baseURL } from "../../utils/api";
import List from "./List";
import Pagination from "../pagination/Pagination";
import SingleMovieDetail from "./SingleMovieDetail";

export default function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [credits, setCredits] = useState("");
  const { id } = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const credits = await Axios.get(
          `${baseURL}/movie/${id}/credits?api_key=${API_KEY}`
        );
        const credit = credits.data;
        setCredits(credit);

        const movieList = await Axios.get(
          `${baseURL}/movie/${id}/recommendations?api_key=${API_KEY}&page=${page}`
        );
        const movie = movieList.data;
        setMovieList(movie);

        const movieDetail = await Axios.get(
          `${baseURL}/movie/${id}?api_key=${API_KEY}`
        );
        const detail = movieDetail.data;
        setMovieDetail(detail);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieData();
  }, [id, page]);

  return (
    <div className="container-xl p-top-7">
      <SingleMovieDetail movieDetail={movieDetail} credits={credits} />
      <div>
        <h3 className="title-lg pt-5">Recommendations</h3>
        <List movieList={movieList.results} />
        <Pagination
          page={page}
          setPage={setPage}
          nextPreviousPage={movieList}
        />
      </div>
    </div>
  );
}
