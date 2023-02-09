import React from "react";
import { useGlobalContext } from "./context";
const Movie = () => {
  const data = useGlobalContext();
  console.log(data);
  return <div>Movie</div>;
};

export default Movie;
