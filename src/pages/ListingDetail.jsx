import { useParams, useNavigate } from "react-router-dom";
import React from "react";

const dummyListings = [
  {
    id: 1,
    title: "Flat in Gurugram",
    location: "Gurugram, India",
    price: "₹7,418 for 2 nights",
    rent: 7418,
    rating: 4.99,
    description: "A modern flat in the heart of Gurugram with all amenities.",
    image: "/icons/img1.avif",
  },
  {
    id: 2,
    title: "Flat in Gurugram",
    location: "Gurugram, India",
    price: "₹6,631 for 2 nights",
    rent: 6631,
    rating: 5.0,
    description: "A stylish and affordable flat close to local attractions.",
    image: "/icons/img2.avif",
  },
  {
    id: 3,
    title: "Flat in Gurugram",
    location: "Gurugram, India",
    price: "₹5,000 for 2 nights",
    rent: 5000,
    rating: 4.82,
    description: "Budget-friendly accommodation ideal for business travelers.",
    image: "/icons/img3.avif",
  },
  {
    id: 4,
    title: "Flat in Gurugram",
    location: "Gurugram, India",
    price: "₹11,641 for 2 nights",
    rent: 11641,
    rating: 4.76,
    description: "Luxury apartment with spacious rooms and high-end finishes.",
    image: "/icons/img4.avif",
  },
  {
    id: 5,
    title: "Lakeview Apartment",
    location: "Udaipur, India",
    price: "₹4,200 for 2 nights",
    rent: 4200,
    rating: 4.88,
    description: "Relax in this beautiful lake-facing apartment in Udaipur.",
    image: "/icons/img5.webp",
  },
  {
    id: 6,
    title: "Cozy Cottage",
    location: "Manali, India",
    price: "₹3,800 for 2 nights",
    rent: 3800,
    rating: 4.67,
    description: "Warm and cozy cottage nestled in the snowy hills of Manali.",
    image: "/icons/img6.jpg",
  },
  {
    id: 7,
    title: "Modern Villa",
    location: "Jaipur, India",
    price: "₹8,999 for 2 nights",
    rent: 8999,
    rating: 4.95,
    description: "Spacious modern villa with pool and garden in Jaipur.",
    image: "/icons/img2.avif",
  },
  {
    id: 8,
    title: "Penthouse in Mumbai",
    location: "Mumbai, India",
    price: "₹12,000 for 2 nights",
    rent: 12000,
    rating: 4.91,
    description: "Luxurious penthouse overlooking Mumbai’s skyline.",
    image: "/icons/img4.avif",
  },
  {
    id: 9,
    title: "Heritage Haveli",
    location: "Jodhpur, India",
    price: "₹7,700 for 2 nights",
    rent: 7700,
    rating: 4.89,
    description: "Traditional Rajasthani haveli with royal charm.",
    image: "/icons/img6.jpg",
  },
  {
    id: 10,
    title: "Treehouse Retreat",
    location: "Kerala, India",
    price: "₹5,200 for 2 nights",
    rent: 5200,
    rating: 4.92,
    description: "Unique experience in the treetops of Kerala’s forests.",
    image: "/icons/img1.avif",
  },
  {
    id: 11,
    title: "Backwater Villa",
    location: "Alleppey, India",
    price: "₹6,300 for 2 nights",
    rent: 6300,
    rating: 4.75,
    description: "Peaceful waterfront villa on Kerala’s backwaters.",
    image: "/icons/img3.avif",
  },
  {
    id: 12,
    title: "Mountain Cabin",
    location: "Leh, India",
    price: "₹9,100 for 2 nights",
    rent: 9100,
    rating: 4.98,
    description: "Rustic mountain retreat with breathtaking views in Leh.",
    image: "/icons/img5.webp",
  },
  {
    id: 13,
    title: "Luxury Tent",
    location: "Pushkar, India",
    price: "₹4,800 for 2 nights",
    rent: 4800,
    rating: 4.84,
    description: "Comfortable luxury tented stay near Pushkar Lake.",
    image: "/icons/img1.avif",
  },
  {
    id: 14,
    title: "Sky View Apartment",
    location: "Bangalore, India",
    price: "₹7,600 for 2 nights",
    rent: 7600,
    rating: 4.90,
    description: "Modern high-rise apartment with panoramic city views.",
    image: "/icons/img2.avif",
  },
  {
    id: 15,
    title: "Studio in Delhi",
    location: "New Delhi, India",
    price: "₹5,500 for 2 nights",
    rent: 5500,
    rating: 4.83,
    description: "Compact and stylish studio ideal for short stays.",
    image: "/icons/img4.avif",
  },
  {
    id: 16,
    title: "Farm Stay",
    location: "Rishikesh, India",
    price: "₹4,300 for 2 nights",
    rent: 4300,
    rating: 4.77,
    description: "Experience nature in this tranquil farm stay near Rishikesh.",
    image: "/icons/img5.webp",
  },
];

export default function ListingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = dummyListings.find((l) => l.id === Number(id));

  if (!listing) {
    return <div className="p-8 text-center text-gray-500">Listing not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 relative">
      {/* Hero Image */}
      <img
        src={listing.image}
        alt={listing.title}
        className="rounded-xl w-full h-[400px] object-cover"
      />

      {/* Details */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">{listing.title}</h1>
        <p className="text-gray-600 mt-1">{listing.location}</p>
        <p className="text-lg font-semibold mt-2">{listing.price}</p>
        <p className="text-yellow-600 mt-1">⭐ {listing.rating}</p>
        <p className="text-sm text-gray-500 mt-1">Rent: ₹{listing.rent}</p>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">About this place</h2>
        <p className="text-gray-700">{listing.description}</p>
      </div>

      {/* Calendar */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Availability</h2>
        <input
          type="date"
          className="border rounded-md p-2 w-60"
          disabled
          value={new Date().toISOString().split("T")[0]}
        />
        <p className="text-sm text-gray-500 mt-1">
          Calendar is a placeholder. Booking integration coming soon.
        </p>
      </div>

      {/* Book Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => navigate("/Booking", { state: { listing } })}
          className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition"
        >
          Book
        </button>
      </div>
    </div>
  );
}

