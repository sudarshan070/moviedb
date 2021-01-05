import React from "react";
import { URL_YOUTUBE } from "../../utils/api";

export default function TrailerList({ trailer }) {
  return (
    <div>
      <iframe
        title={`${URL_YOUTUBE} trailer`}
        src={`${URL_YOUTUBE} trailer`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
