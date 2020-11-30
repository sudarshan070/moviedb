import React from "react";
import { URL_YOUTUBE } from "../utils/api";

export default function TrailerList({ trailer }) {
  console.log(trailer, "trailerList");
  return (
    <div>
      <iframe
        title={`${URL_YOUTUBE} trailer`}
        src={`${URL_YOUTUBE} trailer`}
        frameborder="0"
        allowFullScreen
      />
    </div>
  );
}