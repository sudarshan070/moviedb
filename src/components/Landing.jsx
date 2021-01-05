import React from "react";
import Popular from "./discover/Popular";

export default function Landing({ popularMovies, page, setPage }) {
  return (
    <main className="d-flex">
      <section>
        <Popular popularMovies={popularMovies} page={page} setPage={setPage} />
      </section>
    </main>
  );
}
