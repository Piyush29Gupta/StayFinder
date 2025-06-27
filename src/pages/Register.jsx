import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = form;

    if (!name || !email || !password) return setError("All fields are required");
    if (password.length < 6) return setError("Password must be at least 6 characters");

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) return setError(data.message || "Registration failed");

      alert("Registration successful!");
      navigate("/Home");
    } catch (err) {
      console.error(err);
      setError("Network error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form onSubmit={handleRegister} className="space-y-4">
        <input name="name" placeholder="Name" className="w-full border px-4 py-2 rounded" onChange={handleChange} />
        <input name="email" placeholder="Email" className="w-full border px-4 py-2 rounded" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="w-full border px-4 py-2 rounded" onChange={handleChange} />
        <button type="submit" className="w-full bg-rose-500 text-white py-2 rounded">Register</button>
      </form>
      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-rose-500 font-medium hover:underline">Login</Link>
      </p>
    </div>
  );
}
