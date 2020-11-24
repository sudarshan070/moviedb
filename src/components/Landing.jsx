import React from "react";
import { Genre } from "./Genre";
import MovieList from "./MovieList";

export default function Landing() {
  return (
    <main className="d-flex">
      <aside>
        <Genre />
      </aside>
      <section>
        <MovieList />
      </section>
    </main>
  );
}
