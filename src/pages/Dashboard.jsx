import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://20.197.47.46/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then((json) => setData(json))
      .catch(() => setError("Unable to load dashboard"));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>--Enterprise VAPT Security Dashboard--</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {!data && !error && <p>Loading...</p>}

      {data && (
        <>
          <p><b>Status:</b> {data.status}</p>
          <p><b>Message:</b> {data.message}</p>

          <h3>Modules</h3>
          <ul>
            {data.modules.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}