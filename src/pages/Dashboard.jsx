import { useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  const hit = async (endpoint) => {
    const res = await fetch(`/api/${endpoint}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>-- Enterprise VAPT Security Dashboard --</h2>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button onClick={() => hit("home")}>Home</button>
        <button onClick={() => hit("recon")}>Recon</button>
        <button onClick={() => hit("fast")}>Fast</button>
        <button onClick={() => hit("deep")}>Deep</button>
        <button onClick={() => hit("web")}>Web</button>
        <button onClick={() => hit("ssl")}>SSL</button>
        <button onClick={() => hit("history")}>History</button>
        <button onClick={() => hit("stats")}>Stats</button>
      </div>

      <pre style={{
        marginTop: 20,
        background: "#f4f4f4",
        padding: 20,
        borderRadius: 8
      }}>
        {data ? JSON.stringify(data, null, 2) : "Click any module"}
      </pre>
    </div>
  );
}
