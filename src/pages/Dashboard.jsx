import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/home", {
      headers: {
        Authorization: Bearer ${localStorage.getItem("token")}
      }
    })
      .then(r => r.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: 30 }}>
      <h2>Enterprise VAPT Dashboard</h2>

      {data.modules.map(m => (
        <button
          key={m}
          style={{ margin: 5 }}
          onClick={() =>
            fetch(/${m.toLowerCase()}, {
              headers: {
                Authorization: Bearer ${localStorage.getItem("token")}
              }
            })
              .then(r => r.json())
              .then(res => alert(JSON.stringify(res, null, 2)))
          }
        >
          {m}
        </button>
      ))}
    </div>
  );
}