

export const MovieCard = ({ watchlist,movieObj,poster_path, name,handleAddToWatchlist, handleRemoveToWatchlist }) => {

  function doesContain(movieObj){
    for(let i=0; i<watchlist.length;i++){
      if(watchlist[i].id == movieObj.id){
        return true
      }
    }
     return false
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl cursor-pointer transition-transform duration-300 hover:scale-110 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >

     {doesContain(movieObj) ? <div onClick={() => (handleRemoveToWatchlist(movieObj))} className="m-4 flex justify-center h-8 w-8 items-center rounded-lg text-2xl bg-gray-900">❌</div> :<div className="m-4 flex justify-center h-8 w-8 items-center rounded-lg text-2xl bg-gray-900" onClick={() => (handleAddToWatchlist(movieObj))}>❤️
     </div>
     }

     
      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
};
