import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ watchlist, handleAddToWatchlist, handleRemoveToWatchlist }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=ac00f96737cd37b59fe808b05a01087a&language=en-US&page=${pageNo}`;

  useEffect(() => {
    axios.get(URL).then(
      (res) => (setMovies(res.data.results), console.log(res.data.results))
    );
  }, [pageNo]);

  function nextPage() {
    if (pageNo > 0) {
      setPageNo(pageNo + 1);
    }
  }

  function previousPage() {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div className="text-3xl font-bold text-center text-gray-800 mb-8">
        Trending Movies
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mb-10">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              watchlist={watchlist}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddToWatchlist={handleAddToWatchlist}
              handleRemoveToWatchlist={handleRemoveToWatchlist}
            />
          );
        })}
      </div>

      <Pagination
        pageNo={pageNo}
        nextPage={nextPage}
        previousPage={previousPage}
      />

    </div>
  );
}

export default Movies;
