import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setMsg("Invalid credentials");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>VAPT Secure Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <br /><br />
        <button>Login</button>
      </form>
      <p style={{ color: "red" }}>{msg}</p>
    </div>
  );
}
