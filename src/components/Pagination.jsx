import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Pagination({ pageNo, nextPage, previousPage }) {
  return (
    <div className="bg-gray-100 p-4 m-8 flex justify-center items-center rounded-xl shadow">
      
      <div
        className="px-6 py-2 cursor-pointer text-gray-700 hover:text-blue-600 hover:scale-110 transition"
        onClick={previousPage}
      >
        <FaArrowLeft size={20} />
      </div>

      <div className="font-bold text-xl text-gray-800 px-4">
        {pageNo}
      </div>

      <div
        className="px-6 py-2 cursor-pointer text-gray-700 hover:text-blue-600 hover:scale-110 transition"
        onClick={nextPage}
      >
        <FaArrowRight size={20} />
      </div>

    </div>
  );
}

export default Pagination;
