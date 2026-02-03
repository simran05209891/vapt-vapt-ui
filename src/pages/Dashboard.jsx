import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://20.197.47.46/home", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        if (res.status === 401) {
          navigate("/");
          return;
        }
        return res.json();
      })
      .then(setData)
      .catch(() => setError("Unable to load dashboard"));
  }, []);

  const btn = (name, type) => (
    <button
      style={{ margin: "6px", padding: "6px 14px" }}
      onClick={() => navigate(`/scan/${type}`)}
    >
      {name}
    </button>
  );

  return (
    <div style={{ padding: "25px" }}>
      <h2>--Enterprise VAPT Security Dashboard--</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {!data && !error && <p>Loading...</p>}

      {data && (
        <>
          <p><b>Status:</b> {data.status}</p>
          <p><b>Engine:</b> {data.engine}</p>

          <div style={{ marginTop: "20px" }}>
            {btn("Home", "home")}
            {btn("Recon", "recon")}
            {btn("Fast", "fast")}
            {btn("Deep", "deep")}
            {btn("Web", "web")}
            {btn("SSL", "ssl")}
            {btn("History", "history")}
            {btn("Stats", "stats")}
          </div>
        </>
      )}
    </div>
  );
}
