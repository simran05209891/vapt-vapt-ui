import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("Logging in...");

    try {
      const res = await fetch("http://20.197.47.46/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMsg(data.detail || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      setMsg("Login successful ✅");

      setTimeout(() => navigate("/employees"), 800);
    } catch (err) {
      console.error(err);
      setMsg("Server not reachable");
    }
  };

  return (
    <div style={{ maxWidth: 350, margin: "80px auto" }}>
      <h2>VAPT Secure Login</h2>

      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />
        <button style={{ width: "100%" }}>Login</button>
      </form>

      <p>{msg}</p>
    </div>
  );
}