import React, { useState } from "react";

function Movapp() {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      {movies.map((movieReq) => (
        <MovieBox />
      ))}
    </div>
  );
}

export default Movapp;
