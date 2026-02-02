const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setMsg("Email & password required");
    setColor("red");
    return;
  }

  setLoading(true);
  setMsg("Checking credentials...");
  setColor("black");

  try {
    const payload = {
      email,
      password,
      captcha: ""
    };

    const res = await fetch("http://20.197.47.46/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) {
      setMsg(data.detail || "Login failed");
      setColor("red");
      return;
    }

    localStorage.setItem("token", data.token);
    setMsg("Login successful ✅");
    setColor("green");

    setTimeout(() => navigate("/home"), 1000);

  } catch (err) {
    setMsg("Server not reachable");
    setColor("red");
  } finally {
    setLoading(false);
  }
};