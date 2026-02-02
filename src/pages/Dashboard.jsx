import { useEffect, useState } from "react";

export default function Dashboard() {
  const [home, setHome] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/home")
      .then(res => {
        if (!res.ok) throw new Error("Home API failed");
        return res.json();
      })
      .then(data => setHome(data))
      .catch(err => {
        console.error(err);
        setError("Unable to load platform status");
      });
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>--Enterprise VAPT Security Dashboard--</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {!home && !error && <p>Loading platform data...</p>}

      {home && (
        <div style={{
          marginTop: "15px",
          background: "#f4fbff",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "900px"
        }}>

          <p><b>Engine:</b> {home.engine}</p>
          <p><b>Status:</b> {home.status}</p>
          <p><b>Message:</b> {home.message}</p>

          <hr />

          <h3>Available Modules</h3>
          <ul style={{ columns: 2 }}>
            {home.modules.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>

          <hr />

          <h3>API Endpoints</h3>
          <ul>
            {Object.entries(home.available_endpoints).map(([k, v]) => (
              <li key={k}><b>{k}</b> : {v}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}