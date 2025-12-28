import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import { BrowserRouter ,Routes, Route } from "react-router-dom";

function App() {
  let [watchlist,setWatchlist] = useState([])

  let handleAddToWatchlist = (movieObj) => {
     let newWatchlist = [...watchlist,movieObj]
     localStorage.setItem('moviesApp',JSON.stringify(newWatchlist))
     setWatchlist(newWatchlist)
     console.log(newWatchlist); 
  }

  let handleRemoveToWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
     localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist))
    setWatchlist(filteredWatchlist)
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<><Banner/><Movies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveToWatchlist={handleRemoveToWatchlist}/></> }/>
          <Route path="watchlist" element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveToWatchlist={handleRemoveToWatchlist} />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
