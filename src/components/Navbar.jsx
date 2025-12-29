import { FaClapperboard } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center space-x-8 border-b border-gray-200 px-6 py-4 bg-white sticky top-0 z-50 shadow-sm">
      
      <div className="flex items-center space-x-3">
        <FaClapperboard className="text-blue-500 text-3xl" />
      </div>

      <div className="flex items-center space-x-8">
        <Link
          to="/"
          className="text-blue-500 font-bold text-3xl hover:text-blue-400 transition"
        >
          Movies
        </Link>
        <Link
          to="/watchlist"
          className="text-blue-500 font-bold text-3xl hover:text-blue-400 transition"
        >
          Watchlist
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
