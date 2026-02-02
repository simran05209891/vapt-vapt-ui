import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState("black");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMsg("Email and password required");
      setColor("red");
      return;
    }

    setLoading(true);
    setMsg("Checking credentials...");
    setColor("black");

    try {
      let captchaToken = "";
      if (window.grecaptcha) {
        captchaToken = window.grecaptcha.getResponse();
        if (!captchaToken) {
          setMsg("Please verify captcha");
          setColor("red");
          setLoading(false);
          return;
        }
      }

      const response = await fetch("http://20.197.47.46/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          captcha: captchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMsg(data.error || "Invalid credentials");
        setColor("red");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      setMsg("Login successful");
      setColor("green");

      setTimeout(() => navigate("/employees"), 1000);
    } catch (err) {
      setMsg("Server not reachable");
      setColor("red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Login"}
        </button>

        <p style={{ color }}>{msg}</p>

        <p>
          Don’t have an account? <Link to="/">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;