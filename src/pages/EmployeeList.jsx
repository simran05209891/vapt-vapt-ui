import { useEffect, useState } from "react";

const apiMap = {
  home: "/home",
  recon: "/recon",
  fast: "/scan/fast",
  deep: "/scan/deep",
  web: "/scan/web",
  ssl: "/scan/ssl",
  history: "/history",
  stats: "/stats",
};

export default function EmployeeList() {
  const [activeTab, setActiveTab] = useState("home");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState("demo.preview-workspace.com");

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = () => {
    setLoading(true);
    setData(null);

    let url = apiMap[activeTab];

    // home, history, stats ke liye target nahi chahiye
    if (!["home", "history", "stats"].includes(activeTab)) {
      url = `${url}?target=${encodeURIComponent(target)}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => setData({ error: err.toString() }))
      .finally(() => setLoading(false));
  };

  return (
    <div style={{ padding: "30px", background: "#eef6fb", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center" }}>
        --Enterprise VAPT Security Dashboard--
      </h2>

      {/* Target input */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Enter target domain (example.com)"
          style={{
            padding: "10px",
            width: "320px",
            borderRadius: "6px",
            border: "1px solid #aaa",
            marginRight: "10px",
          }}
        />
        <button
          onClick={fetchData}
          style={{
            padding: "10px 18px",
            borderRadius: "6px",
            border: "none",
            background: "#0b5ed7",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Scan
        </button>
      </div>

      {/* Tabs */}
      <div style={{ margin: "20px 0", textAlign: "center" }}>
        {Object.keys(apiMap).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              margin: "6px",
              padding: "8px 18px",
              borderRadius: "6px",
              border: "1px solid #0b5ed7",
              cursor: "pointer",
              background: activeTab === tab ? "#0b5ed7" : "#7fffd4",
              color: activeTab === tab ? "#fff" : "#000",
              fontWeight: "600",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Output */}
      {loading && <p style={{ color: "blue" }}>Loading {activeTab} data...</p>}

      {data && !data.error && (
        <pre
          style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "8px",
            maxHeight: "500px",
            overflow: "auto",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      {data?.error && <p style={{ color: "red" }}>{data.error}</p>}
    </div>
  );
}
