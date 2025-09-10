import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function AuthPage() {
  const { user, signup, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    try {
      signup(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = () => {
    try {
      login(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6">
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Enter email"
            className="border p-2 mr-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="border p-2 mr-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup} className="mr-2 bg-green-500 text-white px-4 py-2">
            Signup
          </button>
          <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">
            Login
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}
    </div>
  );
}

export default AuthPage;
