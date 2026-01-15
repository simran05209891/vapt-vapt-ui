// 

import { useEffect, useState } from "react";
import "./EmployeeList.css";

const BASE_URL = "http://20.197.47.46";
const TARGET = "demo.preview-workspace.com";

function EmployeeList() {
  const [view, setView] = useState("home"); 
  // home | fast | deep | web | recon | ssl | history | stats

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let url = "";

    if (view === "home") url = `${BASE_URL}/`;
    if (view === "recon") url = `${BASE_URL}/recon?target=${TARGET}`;
    if (view === "fast") url = `${BASE_URL}/scan/fast?target=${TARGET}`;
    if (view === "deep") url = `${BASE_URL}/scan/deep?target=${TARGET}`;
    if (view === "web") url = `${BASE_URL}/scan/web?target=${TARGET}`;
    if (view === "ssl") url = `${BASE_URL}/scan/ssl?target=${TARGET}`;
    if (view === "history") url = `${BASE_URL}/history`;
    if (view === "stats") url = `${BASE_URL}/stats`;

    setLoading(true);
    setData(null);

    fetch(url)
      .then(res => res.json())
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });

  }, [view]);

  return (
    <div style={{ padding: 20, maxWidth: 1100, margin: "auto" }}>
      <h2>--Enterprise VAPT Security Dashboard--</h2>

      {/* BUTTONS */}
      <div style={{ marginBottom: 20 }}>
        <button className={`scan-btn ${view === "home" ? "active" : ""}`} onClick={() => setView("home")}>Home</button>
        <button className={`scan-btn ${view === "recon" ? "active" : ""}`} onClick={() => setView("recon")}>Recon</button>
        <button className={`scan-btn ${view === "fast" ? "active" : ""}`} onClick={() => setView("fast")}>Fast</button>
        <button className={`scan-btn ${view === "deep" ? "active" : ""}`} onClick={() => setView("deep")}>Deep</button>
        <button className={`scan-btn ${view === "web" ? "active" : ""}`} onClick={() => setView("web")}>Web</button>
        <button className={`scan-btn ${view === "ssl" ? "active" : ""}`} onClick={() => setView("ssl")}>SSL</button>
        <button className={`scan-btn ${view === "history" ? "active" : ""}`} onClick={() => setView("history")}>History</button>
        <button className={`scan-btn ${view === "stats" ? "active" : ""}`} onClick={() => setView("stats")}>Stats</button>
      </div>

      {loading && <p>Loading...</p>}
      {!loading && !data && <p>No data available</p>}

      {/* HOME / ENGINE INFO */}
      {view === "home" && data && (
        <>
          <h3>{data.message}</h3>

          <h4>Available Modules</h4>
          <ul>
            {data.modules?.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>

          <h4>API Endpoints</h4>
          <ul>
            {Object.entries(data.endpoints || {}).map(([key, value]) => (
              <li key={key}><b>{key}:</b> {value}</li>
            ))}
          </ul>
        </>
      )}

      {/* FAST / DEEP / WEB SCANS */}
      {(view === "fast" || view === "deep" || view === "web") && data && (
        <>
          <h3>{data.mode} Scan Result</h3>
          <p><b>Scan Time:</b> {data.scan_time}</p>
          <p><b>Verdict:</b> {data.verdict}</p>
          <p><b>Security Grade:</b> {data.security_grade}</p>
          <p><b>Risk %:</b> {data.risk_percentage}</p>

          <h4>Open Ports</h4>
          {data.open_ports?.length === 0 && <p>No open ports detected</p>}

          {data.open_ports?.map(port => (
            <div key={port.port} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
              <p><b>Port:</b> {port.port}</p>
              <p><b>Service:</b> {port.service}</p>
              <p><b>Risk:</b> {port.risk}</p>
              <p><b>Issue:</b> {port.issue}</p>
              <p><b>Recommendation:</b> {port.recommendation}</p>

              <ul>
                {port.possible_attacks?.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          ))}

          <p><i>{data.note}</i></p>
        </>
      )}

      {/* SSL / TLS SCAN */}
      {view === "ssl" && data && (
        <>
          <h3>SSL / TLS Security Scan</h3>

          <p><b>Scan Time:</b> {data.scan_time}</p>
          <p><b>Scan Duration:</b> {data.scan_duration_seconds} sec</p>
          <p><b>Engine:</b> {data.engine}</p>
          <p><b>Target:</b> {data.input}</p>
          <p><b>Resolved IP:</b> {data.resolved_ip}</p>

          <p><b>Verdict:</b> {data.verdict}</p>
          <p><b>Security Grade:</b> {data.security_grade}</p>
          <p><b>Risk %:</b> {data.risk_percentage}</p>

          <h4>Attack Surface</h4>
          <p>Total Open Ports: {data.attack_surface?.total_open_ports}</p>
          <p>High Risk Ports: {data.attack_surface?.high_risk_ports}</p>

          {data.open_ports?.length === 0 && <p>No exposed SSL services detected</p>}

          <p><b>Management Summary:</b> {data.management_summary}</p>
          <p><i>{data.note}</i></p>
        </>
      )}

      {/* RECON */}
      {view === "recon" && data && (
        <>
          <h3>Recon Scan Result</h3>
          <p><b>Scan Time:</b> {data.scan_time}</p>
          <p><b>Target:</b> {data.input}</p>
          <p><b>Resolved IP:</b> {data.resolved_ip}</p>
          <p><b>Reverse DNS:</b> {data.reverse_dns}</p>
          <p><i>{data.note}</i></p>
        </>
      )}

      {/* HISTORY */}
      {view === "history" && Array.isArray(data) && (
        <>
          <h3>Scan History</h3>
          {data.map(item => (
            <div key={item.scan_id} style={{ borderBottom: "1px solid #ddd", padding: 10 }}>
              <p><b>Mode:</b> {item.mode}</p>
              <p><b>Time:</b> {item.scan_time}</p>
              <p><b>Verdict:</b> {item.verdict}</p>
              <p><b>Grade:</b> {item.security_grade}</p>
            </div>
          ))}
        </>
      )}

      {/* STATS */}
      {view === "stats" && data && (
        <>
          <h3>Live Scan Statistics</h3>
          <p><b>Total Scans:</b> {data.total_scans}</p>
          <p><b>Vulnerable Targets:</b> {data.vulnerable_targets}</p>
          <p><b>Safe Targets:</b> {data.safe_targets}</p>
        </>
      )}
    </div>
  );
}

export default EmployeeList;
