import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      navigate("/"); // redirect to home after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
              <style>
        {`
          .login-container {
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
          }
          .login-box {
            background: #fff;
            border-radius: 1rem;
            box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08);
            padding: 2.5rem 2rem;
            width: 100%;
            max-width: 400px;
          }
          .login-title {
            font-size: 2rem;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 1.5rem;
            text-align: center;
          }
          .login-label {
            font-weight: 600;
            margin-bottom: 0.5rem;
            display: block;
          }
          .login-input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #cbd5e1;
            border-radius: 0.5rem;
            margin-bottom: 1.25rem;
            font-size: 1rem;
            outline: none;
            transition: border 0.2s;
          }
          .login-input:focus {
            border-color: #2563eb;
          }
          .login-btn {
            width: 100%;
            background: #2563eb;
            color: #fff;
            font-weight: 600;
            padding: 0.75rem 0;
            border: none;
            border-radius: 0.5rem;
            font-size: 1.1rem;
            cursor: pointer;
            transition: background 0.2s;
          }
          .login-btn:hover {
            background: #1d4ed8;
          }
          .login-link {
            display: block;
            text-align: right;
            margin-top: 1rem;
            color: #2563eb;
            text-decoration: underline;
            font-size: 0.95rem;
          }
        `}
      </style>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 mb-6 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
