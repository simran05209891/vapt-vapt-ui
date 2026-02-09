import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/login`, {
        email: email,
        password: password,
        captcha: "test",
      });

      localStorage.setItem("token", response.data.access_token);

      setMsg("Login Successful ✅");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setMsg("Invalid Email or Password ❌");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>VAPT Secure Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {msg && (
        <p
          style={{
            marginTop: "10px",
            color: msg.includes("Successful") ? "green" : "red",
          }}
        >
          {msg}
        </p>
      )}
    </div>
  );
};

export default Login;