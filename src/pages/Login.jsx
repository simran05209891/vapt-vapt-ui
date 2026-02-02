import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/employees");
      } else {
        setMsg("Login failed");
      }
    } catch {
      setMsg("Server error");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>VAPT Secure Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/><br/>
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} /><br/><br/>
      <button onClick={handleLogin}>Login</button>
      <p style={{ color: "red" }}>{msg}</p>
    </div>
  );
