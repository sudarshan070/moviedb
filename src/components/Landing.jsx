import React from "react";
import Popular from "./discover/Popular";

export default function Landing({ popularMovie, page, setPage }) {
  return (
    <main className="d-flex">
      <section>
        <Popular popularMovie={popularMovie} page={page} setPage={setPage} />
      </section>
    </main>
  );
}
