import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Welcome to StayFinder</h1>
      <p className="text-gray-700 max-w-xl mb-6">
        StayFinder is your gateway to discovering the best vacation stays across India.
        From cozy cottages in the mountains to luxurious villas by the sea, we connect travelers
        with unique homes that make your journey unforgettable.
      </p>
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400 transition">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
