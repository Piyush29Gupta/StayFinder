import { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";
import React from "react";


const dummyListings = [
  {
    id: 1,
    title: "Flat in Gurugram",
    location: "Gurugram, India",
    price: "₹7,418 for 2 nights",
    rating: 4.99,
    image: "/icons/img1.avif",
  },
  {
    id: 2,
    title: "Flat in Gurugram",
    location: "Gurugram, India",
    price: "₹6,631 for 2 nights",
    rating: 5.0,
    image: "/icons/img2.avif",
  },
  {
    id: 3,
    title: "Flat in Gurugram",
    location: "Gurugram, India",
    price: "₹5,000 for 2 nights",
    rating: 4.82,
    image: "/icons/img3.avif",
  },
  {
    id: 4,
    title: "Flat in Gurugram",
    location: "Gurugram, India",
    price: "₹11,641 for 2 nights",
    rating: 4.76,
    image: "/icons/img4.avif",
  },
  {
    id: 5,
    title: "Lakeview Apartment",
    location: "Udaipur, India",
    price: "₹4,200 for 2 nights",
    rating: 4.88,
    image: "/icons/img5.webp",
  },
  {
    id: 6,
    title: "Cozy Cottage",
    location: "Manali, India",
    price: "₹3,800 for 2 nights",
    rating: 4.67,
    image: "/icons/img6.jpg",
  },
  {
    id: 7,
    title: "Modern Villa",
    location: "Jaipur, India",
    price: "₹8,999 for 2 nights",
    rating: 4.95,
    image: "/icons/img2.avif",
  },
  {
    id: 8,
    title: "Penthouse in Mumbai",
    location: "Mumbai, India",
    price: "₹12,000 for 2 nights",
    rating: 4.91,
    image: "/icons/img4.avif",
  },
    {
    id: 9,
    title: "Heritage Haveli",
    location: "Jodhpur, India",
    price: "₹7,700 for 2 nights",
    rating: 4.89,
    image: "/icons/img6.jpg",
  },
  {
    id: 10,
    title: "Treehouse Retreat",
    location: "Kerala, India",
    price: "₹5,200 for 2 nights",
    rating: 4.92,
    image: "/icons/img1.avif",
  },
  {
    id: 11,
    title: "Backwater Villa",
    location: "Alleppey, India",
    price: "₹6,300 for 2 nights",
    rating: 4.75,
    image: "/icons/img3.avif",
  },
  {
    id: 12,
    title: "Mountain Cabin",
    location: "Leh, India",
    price: "₹9,100 for 2 nights",
    rating: 4.98,
    image: "/icons/img5.webp",
  },
  {
    id: 13,
    title: "Luxury Tent",
    location: "Pushkar, India",
    price: "₹4,800 for 2 nights",
    rating: 4.84,
    image: "/icons/img1.avif",
  },
  {
    id: 14,
    title: "Sky View Apartment",
    location: "Bangalore, India",
    price: "₹7,600 for 2 nights",
    rating: 4.90,
    image: "/icons/img2.avif",
  },
  {
    id: 15,
    title: "Studio in Delhi",
    location: "New Delhi, India",
    price: "₹5,500 for 2 nights",
    rating: 4.83,
    image: "/icons/img4.avif",
  },
  {
    id: 16,
    title: "Farm Stay",
    location: "Rishikesh, India",
    price: "₹4,300 for 2 nights",
    rating: 4.77,
    image: "/icons/img5.webp",
  },
  
];

export default function HomePage() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showGuests, setShowGuests] = useState(false);
  const [guests, setGuests] = useState({ adults: 0, children: 0, infants: 0, pets: 0 });
  const guestRef = useRef(null);

  useEffect(() => {
    setListings(dummyListings);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestRef.current && !guestRef.current.contains(event.target)) {
        setShowGuests(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const updateGuestCount = (type, delta) => {
    setGuests((prev) => ({ ...prev, [type]: Math.max(0, prev[type] + delta) }));
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">StayFinder</div>
        <div className="space-x-4 flex items-center">
          <button className="text-sm text-gray-700 font-medium">Become a host</button>
          <div className="h-8 w-8 rounded-full bg-gray-400"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        <div className="mt-6 mb-8 relative">
          <div className="flex items-center justify-between bg-white rounded-full shadow-lg px-4 py-2 max-w-4xl mx-auto overflow-hidden">
            <div className="flex flex-col px-4 py-2 border-r">
              <span className="text-xs font-semibold text-gray-800">Where</span>
              <input
                type="text"
                placeholder="Search destinations"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-sm text-gray-500 outline-none"
              />
            </div>
            <div className="flex flex-col px-4 py-2 border-r">
              <span className="text-xs font-semibold text-gray-800">Check in</span>
              <input type="date" className="text-sm text-gray-500 outline-none" />
            </div>
            <div className="flex flex-col px-4 py-2 border-r">
              <span className="text-xs font-semibold text-gray-800">Check out</span>
              <input type="date" className="text-sm text-gray-500 outline-none" />
            </div>
            <div className="flex flex-col px-4 py-2 border-r relative">
              <span className="text-xs font-semibold text-gray-800">Who</span>
              <input
                onClick={() => setShowGuests(true)}
                value={`${guests.adults + guests.children + guests.infants + guests.pets} guests`}
                readOnly
                className="text-sm text-gray-500 outline-none cursor-pointer"
              />
            </div>
            <button className="bg-rose-500 text-white rounded-full p-3 hover:bg-rose-600 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
              </svg>
            </button>
          </div>

          {showGuests && (
            <div
              ref={guestRef}
              className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 w-96 z-50"
            >
              {[
                { label: "Adults", type: "adults", note: "Ages 13 or above" },
                { label: "Children", type: "children", note: "Ages 2–12" },
                { label: "Infants", type: "infants", note: "Under 2" },
                { label: "Pets", type: "pets", note: "Bringing a service animal?" },
              ].map(({ label, type, note }) => (
                <div key={type} className="flex justify-between items-center py-3 border-b">
                  <div>
                    <div className="font-semibold text-gray-800">{label}</div>
                    <div className="text-sm text-gray-500">{note}</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => updateGuestCount(type, -1)}
                      className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
                    >
                      –
                    </button>
                    <span>{guests[type]}</span>
                    <button
                      onClick={() => updateGuestCount(type, 1)}
                      className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setShowGuests(false)}
                className="mt-4 w-full bg-rose-500 text-white py-2 rounded-xl hover:bg-rose-600"
              >
                Done
              </button>
            </div>
          )}
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-6">Popular homes in Gurgaon District</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {listings
              .filter(
                (listing) =>
                  listing.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  listing.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((listing) => (
                <Link
                  to={`/listing/${listing.id}`}
                  key={listing.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="p-4">
                    <div className="font-medium text-gray-800">{listing.title}</div>
                    <div className="text-sm text-gray-500">{listing.location}</div>
                    <div className="text-sm text-gray-800 mt-1">{listing.price}</div>
                    <div className="text-sm text-yellow-600">⭐ {listing.rating.toFixed(2)}</div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white mt-12 py-10 text-sm text-gray-600">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-black mb-2">Support</h4>
              <ul className="space-y-1">
                <li>Help Centre</li>
                <li>Get help with a safety issue</li>
                <li>AirCover</li>
                <li>Anti-discrimination</li>
                <li>Disability support</li>
                <li>Cancellation options</li>
                <li>Report neighbourhood concern</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Hosting</h4>
              <ul className="space-y-1">
                <li>stayfinder your home</li>
                <li>AirCover for Hosts</li>
                <li>Hosting resources</li>
                <li>Community forum</li>
                <li>Hosting responsibly</li>
                <li>Join a free Hosting class</li>
                <li>Find a co-host</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">stayfinder</h4>
              <ul className="space-y-1">
                <li>2025 Summer Release</li>
                <li>Newsroom</li>
                <li>New features</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>stayfinder.org emergency stays</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto px-4 text-xs">
            <div>
              © 2025 stayfinder, Inc. · Privacy · Terms · Sitemap · Company details
            </div>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <span>🌐 English (IN)</span>
              <span>₹ INR</span>
              <span>🔘</span>
              <span>❌</span>
              <span>📷</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
