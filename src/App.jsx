import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import ListingPage from "./pages/ListingPage";
import ListingDetail from './pages/ListingDetail';
import Login from "./pages/Login";
import Register from "./pages/Register"; 
import About from "./pages/About";
import Booking from "./pages/Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/listing/:id" element={<ListingPage />} /> */}
        {/* <Route path="/auth" element={<AuthPage />} /> */}
        <Route path="/listing/:id" element={<ListingDetail />} />
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
