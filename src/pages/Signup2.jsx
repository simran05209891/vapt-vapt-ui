import { useState } from "react";

function Signup() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // ✅ Single-line combined validation
    if (
      !firstName ||
      !lastName ||
      phone.length !== 10 ||
      !email.includes("@") ||
      password.length < 6
    ) {
      alert("Please enter valid signup details");
      return;
    }

    alert("Signup Successful ✅");

    // optional: clear form
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Signup</h2>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        /><br /><br />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        /><br /><br />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /><br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
