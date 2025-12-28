import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import genreids from "../utility/genre";
function Watchlist({ watchlist, setWatchlist, handleRemoveToWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDecreasing]);
  };
  let sortIncreasingPopularity = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    setWatchlist([...sortedIncreasing]);
  };

  let sortDecreasingPopularity = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    setWatchlist([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp); // removes duplicate genre from watch list section header genre
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-6 gap-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center h-12 w-36 bg-blue-500 hover:bg-blue-600 transition rounded-full text-white font-semibold items-center shadow"
                  : "flex justify-center h-12 w-36 bg-gray-300 hover:bg-gray-400 transition rounded-full text-gray-800 font-semibold items-center shadow"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* Search input */}
      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search Movies"
          className="h-12 w-72 px-4 rounded-lg bg-gray-100 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleSearch}
          value={search}
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 m-8 shadow-lg bg-white">
        <table className="w-full text-center text-gray-600">
          <thead className="border-b bg-gray-100 text-gray-800">
            <tr>
              <th className="py-4">Name</th>

              <th className="py-4">
                <div className="flex items-center justify-center gap-2">
                  <div className="cursor-pointer" onClick={sortIncreasing}>
                    <FaArrowUp />
                  </div>
                  <span>Ratings</span>
                  <div className="cursor-pointer" onClick={sortDecreasing}>
                    <FaArrowDown />
                  </div>
                </div>
              </th>

              <th className="py-4">
                <div className="flex items-center justify-center gap-2">
                  <div
                    className="cursor-pointer"
                    onClick={sortIncreasingPopularity}
                  >
                    <FaArrowUp />
                  </div>
                  <span>Popularity</span>
                  <div
                    className="cursor-pointer"
                    onClick={sortDecreasingPopularity}
                  >
                    <FaArrowDown />
                  </div>
                </div>
              </th>

              <th className="py-4">Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr
                    key={movieObj.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-24 w-40 rounded-lg object-cover shadow"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt={movieObj.title}
                      />
                      <div className="ml-6 font-semibold text-gray-900">
                        {movieObj.title}
                      </div>
                    </td>

                    <td className="font-medium text-gray-900">
                      ⭐ {movieObj.vote_average}
                    </td>

                    <td className="font-medium text-gray-900">
                      {movieObj.popularity}
                    </td>

                    <td className="font-medium text-gray-900">
                      {genreids[movieObj.genre_ids[0]]}
                    </td>

                    <td
                      onClick={() => handleRemoveToWatchlist(movieObj)}
                      className="text-red-600 hover:text-red-800 font-semibold cursor-pointer transition"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
