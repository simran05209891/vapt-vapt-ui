import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("Checking credentials...");

    try {
      const res = await fetch("http://20.197.47.46/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          captcha: "demo",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMsg(data.detail || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/employees");
    } catch {
      setMsg("Server not reachable");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ textAlign: "center", marginTop: 80 }}>
      <h2>VAPT Secure Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" /><br />
      <button type="submit">Login</button>
      <p>{msg}</p>
    </form>
  );
}