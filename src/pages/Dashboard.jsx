import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://20.197.47.46/home")
      .then(res => res.json())
      .then(setData)
      .catch(() => setError("Unable to load data"));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: 30 }}>
      <h2>--Enterprise VAPT Security Dashboard--</h2>
      <p>Status: {data.status}</p>

      <h3>Modules</h3>
      <ul>
        {data.modules.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  );
}