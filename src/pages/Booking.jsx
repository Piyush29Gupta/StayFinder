import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BookingPage() {
  const location = useLocation();
  const { listing } = location.state || {};

  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser._id) {
      fetch(`http://localhost:5000/api/user/${currentUser._id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.error("Failed to fetch user:", err));
    }
  }, []);

  if (!listing) {
    return <div className="p-8 text-center text-gray-500">No booking information found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Booking Summary</h1>

      {/* Hotel Info */}
      <div className="bg-white shadow-md rounded-xl p-4 flex gap-4">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-48 h-48 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-xl font-semibold">{listing.title}</h2>
          <p className="text-gray-500">{listing.location}</p>
          <p className="mt-2 text-lg font-medium">{listing.price}</p>
          <p className="text-yellow-600">⭐ {listing.rating}</p>
          <p className="text-sm text-gray-400">Rent: ₹{listing.rent}</p>
        </div>
      </div>

      {/* User Info */}
      <div className="mt-8 bg-white shadow-md rounded-xl p-4">
        <h3 className="text-xl font-semibold mb-2">Your Information</h3>
        {user ? (
          <>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            
          </>
        ) : (
          <p className="text-gray-500">Loading user info...</p>
        )}
      </div>

      {/* Confirm */}
      <div className="mt-8 text-right">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md">
          Confirm Booking
        </button>
      </div>
    </div>
  );
}



// import { useLocation } from "react-router-dom";

// export default function BookingPage() {
//   const location = useLocation();
//   const { listing } = location.state || {};

//   if (!listing) {
//     return <div className="p-8 text-center text-gray-500">No booking information found.</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Booking Summary</h1>

//       {/* Hotel Info */}
//       <div className="bg-white shadow-md rounded-xl p-4 flex gap-4">
//         <img
//           src={listing.image}
//           alt={listing.title}
//           className="w-48 h-48 object-cover rounded-lg"
//         />
//         <div>
//           <h2 className="text-xl font-semibold">{listing.title}</h2>
//           <p className="text-gray-500">{listing.location}</p>
//           <p className="mt-2 text-lg font-medium">{listing.price}</p>
//           <p className="text-yellow-600">⭐ {listing.rating}</p>
//           <p className="text-sm text-gray-400">Rent: ₹{listing.rent}</p>
//         </div>
//       </div>

//       {/* User Info (Static for now) */}
//       <div className="mt-8 bg-white shadow-md rounded-xl p-4">
//         <h3 className="text-xl font-semibold mb-2">Your Information</h3>
//         <p>Name: Piyush Gupta</p>
//         <p>Email: piyush@example.com</p>
//         <p>Phone: +91-9876543210</p>
//       </div>

//       {/* Placeholder Payment / Confirm */}
//       <div className="mt-8 text-right">
//         <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md">
//           Confirm Booking
//         </button>
//       </div>
//     </div>
//   );
// }
