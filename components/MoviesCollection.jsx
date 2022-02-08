import React from "react";
import MovieTumbnail from "./MovieTumbnail";

function MoviesCollection({ results, title }) {
  return (
    <div className="flex relative flex-col space-y-2 my-10 px-8 max-w-[1400] mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
        {results.map((result) => (
          <MovieTumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

export default MoviesCollection;
