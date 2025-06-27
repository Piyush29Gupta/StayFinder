import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = form;

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) return setError(data.message || "Invalid credentials");

      localStorage.setItem("currentUser", JSON.stringify(data.user));
      alert(`Welcome, ${data.user.name}`);
      navigate("/Home");
    } catch (err) {
      console.error(err);
      setError("Network error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input name="email" placeholder="Email" className="w-full border px-4 py-2 rounded" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="w-full border px-4 py-2 rounded" onChange={handleChange} />
        <button type="submit" className="w-full bg-rose-500 text-white py-2 rounded">Login</button>
      </form>
      <p className="text-sm text-center mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-rose-500 font-medium hover:underline">Register</Link>
      </p>
    </div>
  );
}
