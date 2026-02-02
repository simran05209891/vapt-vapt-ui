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

    const response = await fetch("/api/login", {
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
      setMsg(data.error || "Login failed");
      setColor("red");
      setLoading(false);
      return;
    }

    localStorage.setItem("token", data.token);
    setMsg("Login successful ✅");
    setColor("green");

    setTimeout(() => {
      navigate("/employees");
    }, 1000);

  } catch (err) {
    setMsg("Server not reachable");
    setColor("red");
  } finally {
    setLoading(false);
  }
};
