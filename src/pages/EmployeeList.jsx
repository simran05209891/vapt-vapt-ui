import { useEffect, useState } from "react";

const apiMap = {
  home: "/home",
  recon: "/recon",
  fast: "/scan/fast?target=demo.preview-workspace.com",
  deep: "/scan/deep?target=demo.preview-workspace.com",
  web: "/scan/web?target=demo.preview-workspace.com",
  ssl: "/scan/ssl?target=demo.preview-workspace.com",
  history: "/history",
  stats: "/stats"
};

export default function EmployeeList() {
  const [activeTab, setActiveTab] = useState("home");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData(null);

    fetch(apiMap[activeTab])
      .then(res => res.json())
      .then(d => setData(d))
      .catch(err => setData({ error: err.toString() }))
      .finally(() => setLoading(false));

  }, [activeTab]);

  return (
    <div style={{ padding: "30px", background: "#eef6fb", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center" }}>--Enterprise VAPT Security Dashboard--</h2>

      <div style={{ margin: "20px 0", textAlign: "center" }}>
        {Object.keys(apiMap).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              margin: "6px",
              padding: "8px 18px",
              borderRadius: "6px",
              border: "1px solid #000",
              cursor: "pointer",
              background: activeTab === tab ? "#0b2c6f" : "#7fffd4",
              color: activeTab === tab ? "#fff" : "#000",
              fontWeight: "600"
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {loading && <p style={{ color: "blue" }}>Loading {activeTab} data...</p>}

      {data && !data.error && (
        <pre style={{ background: "#fff", padding: "15px", borderRadius: "8px" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      {data?.error && <p style={{ color: "red" }}>{data.error}</p>}
    </div>
  );
}
