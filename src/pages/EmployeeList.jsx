// // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // import "./EmployeeList.css";

// // // // // // // // // const apiMap = {
// // // // // // // // //   home: "/home",
// // // // // // // // //   recon: "/recon",
// // // // // // // // //   fast: "/scan/fast",
// // // // // // // // //   deep: "/scan/deep",
// // // // // // // // //   web: "/scan/web",
// // // // // // // // //   ssl: "/scan/ssl",
// // // // // // // // //   history: "/history",
// // // // // // // // //   stats: "/stats",
// // // // // // // // // };

// // // // // // // // // export default function EmployeeList() {
// // // // // // // // //   const [activeTab, setActiveTab] = useState("home");
// // // // // // // // //   const [data, setData] = useState(null);
// // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // //   const [target, setTarget] = useState("demo.preview-workspace.com");

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchData();
// // // // // // // // //   }, [activeTab]);

// // // // // // // // //   const fetchData = () => {
// // // // // // // // //     setLoading(true);
// // // // // // // // //     setData(null);

// // // // // // // // //     let url = apiMap[activeTab];
// // // // // // // // //     if (!["home", "history", "stats"].includes(activeTab)) {
// // // // // // // // //       url = `${url}?target=${encodeURIComponent(target)}`;
// // // // // // // // //     }

// // // // // // // // //     fetch(url)
// // // // // // // // //       .then((res) => res.json())
// // // // // // // // //       .then((d) => setData(d))
// // // // // // // // //       .catch((err) => setData({ error: err.toString() }))
// // // // // // // // //       .finally(() => setLoading(false));
// // // // // // // // //   };

// // // // // // // // //   const verdictColor =
// // // // // // // // //     data?.verdict === "SAFE"
// // // // // // // // //       ? "green"
// // // // // // // // //       : data?.verdict === "VULNERABLE"
// // // // // // // // //       ? "red"
// // // // // // // // //       : "orange";

// // // // // // // // //   return (
// // // // // // // // //     <div style={{ padding: "30px", background: "#eef6fb", minHeight: "100vh" }}>
// // // // // // // // //       <h2 style={{ textAlign: "center" }}>
// // // // // // // // //         Enterprise VAPT Security Dashboard
// // // // // // // // //       </h2>

// // // // // // // // //       {/* Target Input */}
// // // // // // // // //       <div style={{ textAlign: "center", margin: "20px" }}>
// // // // // // // // //         <input
// // // // // // // // //           value={target}
// // // // // // // // //           onChange={(e) => setTarget(e.target.value)}
// // // // // // // // //           placeholder="Enter target domain"
// // // // // // // // //           style={{
// // // // // // // // //             padding: "10px",
// // // // // // // // //             width: "320px",
// // // // // // // // //             borderRadius: "6px",
// // // // // // // // //             border: "1px solid #aaa",
// // // // // // // // //             marginRight: "10px",
// // // // // // // // //           }}
// // // // // // // // //         />
// // // // // // // // //         <button
// // // // // // // // //           onClick={fetchData}
// // // // // // // // //           style={{
// // // // // // // // //             padding: "10px 18px",
// // // // // // // // //             borderRadius: "6px",
// // // // // // // // //             border: "none",
// // // // // // // // //             background: "#0b5ed7",
// // // // // // // // //             color: "#fff",
// // // // // // // // //             fontWeight: "600",
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           Scan
// // // // // // // // //         </button>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Tabs */}
// // // // // // // // //       <div style={{ textAlign: "center", marginBottom: "20px" }}>
// // // // // // // // //         {Object.keys(apiMap).map((tab) => (
// // // // // // // // //           <button
// // // // // // // // //             key={tab}
// // // // // // // // //             onClick={() => setActiveTab(tab)}
// // // // // // // // //             style={{
// // // // // // // // //               margin: "6px",
// // // // // // // // //               padding: "8px 18px",
// // // // // // // // //               borderRadius: "6px",
// // // // // // // // //               border: "1px solid #0b5ed7",
// // // // // // // // //               background: activeTab === tab ? "#0b5ed7" : "#7fffd4",
// // // // // // // // //               color: activeTab === tab ? "#fff" : "#000",
// // // // // // // // //               fontWeight: "600",
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             {tab.toUpperCase()}
// // // // // // // // //           </button>
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
// // // // // // // // //       {data?.error && <p style={{ color: "red" }}>{data.error}</p>}

// // // // // // // // //       {/* ================= SSL ================= */}
// // // // // // // // //       {activeTab === "ssl" && data && (
// // // // // // // // //         <>
// // // // // // // // //           <div className="card">
// // // // // // // // //             <h3>🔐 SSL Scan Summary</h3>
// // // // // // // // //             <p><b>Scan ID:</b> {data.scan_id}</p>
// // // // // // // // //             <p><b>Scan Time:</b> {data.scan_time}</p>
// // // // // // // // //             <p><b>Duration:</b> {data.scan_duration_seconds}s</p>
// // // // // // // // //             <p><b>Target:</b> {data.input}</p>
// // // // // // // // //             <p><b>Resolved IP:</b> {data.resolved_ip}</p>
// // // // // // // // //             <p>
// // // // // // // // //               <b>Verdict:</b>{" "}
// // // // // // // // //               <span style={{ color: verdictColor, fontWeight: "bold" }}>
// // // // // // // // //                 {data.verdict}
// // // // // // // // //               </span>
// // // // // // // // //             </p>
// // // // // // // // //             <p><b>Security Grade:</b> {data.security_grade}</p>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="card">
// // // // // // // // //             <h3>📊 SSL Risk Metrics</h3>
// // // // // // // // //             <p><b>Risk Percentage:</b> {data.risk_percentage}%</p>
// // // // // // // // //             <p><b>Attack Surface Score:</b> {data.attack_surface_score}</p>
// // // // // // // // //             <p><b>Total Open Ports:</b> {data.attack_surface.total_open_ports}</p>
// // // // // // // // //             <p><b>High Risk Ports:</b> {data.attack_surface.high_risk_ports}</p>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="card">
// // // // // // // // //             <h3>🧠 Management Summary</h3>
// // // // // // // // //             <p>{data.management_summary}</p>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="card">
// // // // // // // // //             <h3>📌 Note</h3>
// // // // // // // // //             <p>{data.note}</p>
// // // // // // // // //           </div>
// // // // // // // // //         </>
// // // // // // // // //       )}

// // // // // // // // //       {/* ================= FALLBACK ================= */}
// // // // // // // // //       {activeTab !== "ssl" && data && (
// // // // // // // // //         <pre style={{ background: "#fff", padding: "15px" }}>
// // // // // // // // //           {JSON.stringify(data, null, 2)}
// // // // // // // // //         </pre>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import "./EmployeeList.css";

// // // // // // // // const apiMap = {
// // // // // // // //   home: "/home",
// // // // // // // //   recon: "/recon",
// // // // // // // //   fast: "/scan/fast",
// // // // // // // //   deep: "/scan/deep",
// // // // // // // //   web: "/scan/web",
// // // // // // // //   ssl: "/scan/ssl",
// // // // // // // //   history: "/history",
// // // // // // // //   stats: "/stats",
// // // // // // // // };

// // // // // // // // export default function EmployeeList() {
// // // // // // // //   const [activeTab, setActiveTab] = useState("home");
// // // // // // // //   const [data, setData] = useState(null);
// // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // //   const [target, setTarget] = useState("demo.preview-workspace.com");

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchData();
// // // // // // // //   }, [activeTab]);

// // // // // // // //   const fetchData = () => {
// // // // // // // //     setLoading(true);
// // // // // // // //     setData(null);

// // // // // // // //     let url = apiMap[activeTab];
// // // // // // // //     if (!["home", "history", "stats"].includes(activeTab)) {
// // // // // // // //       url = `${url}?target=${encodeURIComponent(target)}`;
// // // // // // // //     }

// // // // // // // //     fetch(url)
// // // // // // // //       .then((res) => res.json())
// // // // // // // //       .then((d) => setData(d))
// // // // // // // //       .catch((err) => setData({ error: err.toString() }))
// // // // // // // //       .finally(() => setLoading(false));
// // // // // // // //   };

// // // // // // // //   const verdictColor =
// // // // // // // //     data?.verdict === "SAFE"
// // // // // // // //       ? "green"
// // // // // // // //       : data?.verdict === "VULNERABLE"
// // // // // // // //       ? "red"
// // // // // // // //       : "orange";

// // // // // // // //   return (
// // // // // // // //     <div style={{ padding: "30px", background: "#eef6fb", minHeight: "100vh" }}>
// // // // // // // //       <h2 style={{ textAlign: "center" }}>
// // // // // // // //         Enterprise VAPT Security Dashboard
// // // // // // // //       </h2>

// // // // // // // //       {/* Target */}
// // // // // // // //       <div style={{ textAlign: "center", margin: "20px" }}>
// // // // // // // //         <input
// // // // // // // //           value={target}
// // // // // // // //           onChange={(e) => setTarget(e.target.value)}
// // // // // // // //           placeholder="Enter target domain"
// // // // // // // //           style={{ padding: "10px", width: "320px" }}
// // // // // // // //         />
// // // // // // // //         <button onClick={fetchData} style={{ marginLeft: "10px" }}>
// // // // // // // //           Scan
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Tabs */}
// // // // // // // //       <div style={{ textAlign: "center", marginBottom: "20px" }}>
// // // // // // // //         {Object.keys(apiMap).map((tab) => (
// // // // // // // //           <button
// // // // // // // //             key={tab}
// // // // // // // //             onClick={() => setActiveTab(tab)}
// // // // // // // //             style={{
// // // // // // // //               margin: "5px",
// // // // // // // //               padding: "8px 15px",
// // // // // // // //               background: activeTab === tab ? "#0b5ed7" : "#7fffd4",
// // // // // // // //               color: activeTab === tab ? "#fff" : "#000",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {tab.toUpperCase()}
// // // // // // // //           </button>
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       {loading && <p>Loading...</p>}
// // // // // // // //       {data?.error && <p style={{ color: "red" }}>{data.error}</p>}

// // // // // // // //       {/* ================= HOME ================= */}
// // // // // // // //       {activeTab === "home" && data && (
// // // // // // // //         <>
// // // // // // // //           <div className="card">
// // // // // // // //             <h3>Engine Status</h3>
// // // // // // // //             <p><b>Engine:</b> {data.engine}</p>
// // // // // // // //             <p><b>Status:</b> {data.status}</p>
// // // // // // // //             <p><b>Message:</b> {data.message}</p>
// // // // // // // //           </div>

// // // // // // // //           <div className="card">
// // // // // // // //             <h3>Modules</h3>
// // // // // // // //             {data.modules?.map((m, i) => (
// // // // // // // //               <span key={i} style={{ marginRight: "10px" }}>{m}</span>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </>
// // // // // // // //       )}

// // // // // // // //       {/* ================= RECON ================= */}
// // // // // // // //       {activeTab === "recon" && data && (
// // // // // // // //         <div className="card">
// // // // // // // //           <h3>Recon Summary</h3>
// // // // // // // //           <p><b>Domain:</b> {data.input}</p>
// // // // // // // //           <p><b>IP:</b> {data.resolved_ip}</p>
// // // // // // // //           <p><b>Asset:</b> {data.asset_type}</p>
// // // // // // // //           <p><b>Cloud Ready:</b> {data.cloud_ready ? "Yes" : "No"}</p>
// // // // // // // //           <p>{data.note}</p>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* ================= FAST ================= */}
// // // // // // // //       {activeTab === "fast" && data && (
// // // // // // // //         <>
// // // // // // // //           <div className="card">
// // // // // // // //             <h3>Fast Scan Result</h3>
// // // // // // // //             <p><b>Verdict:</b> <span style={{ color: verdictColor }}>{data.verdict}</span></p>
// // // // // // // //             <p><b>Security Grade:</b> {data.security_grade}</p>
// // // // // // // //             <p><b>Risk:</b> {data.risk_percentage}%</p>
// // // // // // // //           </div>

// // // // // // // //           {data.open_ports?.map((p, i) => (
// // // // // // // //             <div className="card" key={i}>
// // // // // // // //               <h4>Port {p.port} ({p.service})</h4>
// // // // // // // //               <p><b>Risk:</b> {p.risk}</p>
// // // // // // // //               <p><b>Issue:</b> {p.issue}</p>
// // // // // // // //               <p><b>Recommendation:</b> {p.recommendation}</p>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </>
// // // // // // // //       )}

// // // // // // // //       {/* ================= DEEP ================= */}
// // // // // // // //       {activeTab === "deep" && data && (
// // // // // // // //         <div className="card">
// // // // // // // //           <h3>Deep Scan</h3>
// // // // // // // //           <p><b>Verdict:</b> <span style={{ color: verdictColor }}>{data.verdict}</span></p>
// // // // // // // //           <p><b>Security Grade:</b> {data.security_grade}</p>
// // // // // // // //           <p>{data.management_summary}</p>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* ================= WEB ================= */}
// // // // // // // //       {activeTab === "web" && data && (
// // // // // // // //         <>
// // // // // // // //           <div className="card">
// // // // // // // //             <h3>Web Scan</h3>
// // // // // // // //             <p><b>Verdict:</b> <span style={{ color: verdictColor }}>{data.verdict}</span></p>
// // // // // // // //             <p><b>Risk:</b> {data.risk_percentage}%</p>
// // // // // // // //           </div>

// // // // // // // //           {data.open_ports?.map((p, i) => (
// // // // // // // //             <div className="card" key={i}>
// // // // // // // //               <p><b>Port:</b> {p.port}</p>
// // // // // // // //               <p><b>Vulnerabilities:</b> {p.possible_attacks.join(", ")}</p>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </>
// // // // // // // //       )}

// // // // // // // //       {/* ================= SSL ================= */}
// // // // // // // //       {activeTab === "ssl" && data && (
// // // // // // // //         <div className="card">
// // // // // // // //           <h3>SSL Scan</h3>
// // // // // // // //           <p><b>Verdict:</b> <span style={{ color: verdictColor }}>{data.verdict}</span></p>
// // // // // // // //           <p><b>Security Grade:</b> {data.security_grade}</p>
// // // // // // // //           <p>{data.management_summary}</p>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import "./EmployeeList.css";

// // // // // // // const apiMap = {
// // // // // // //   home: "/home",
// // // // // // //   recon: "/recon",
// // // // // // //   fast: "/scan/fast",
// // // // // // //   deep: "/scan/deep",
// // // // // // //   web: "/scan/web",
// // // // // // //   ssl: "/scan/ssl",
// // // // // // //   history: "/history",
// // // // // // //   stats: "/stats",
// // // // // // // };

// // // // // // // export default function EmployeeList() {
// // // // // // //   const [activeTab, setActiveTab] = useState("home");
// // // // // // //   const [data, setData] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [target, setTarget] = useState("demo.preview-workspace.com");

// // // // // // //   useEffect(() => {
// // // // // // //     fetchData();
// // // // // // //   }, [activeTab]);

// // // // // // //   const fetchData = () => {
// // // // // // //     setLoading(true);
// // // // // // //     setData(null);

// // // // // // //     let url = apiMap[activeTab];
// // // // // // //     if (!["home", "history", "stats"].includes(activeTab)) {
// // // // // // //       url = `${url}?target=${encodeURIComponent(target)}`;
// // // // // // //     }

// // // // // // //     fetch(url)
// // // // // // //       .then((res) => res.json())
// // // // // // //       .then((d) => setData(d))
// // // // // // //       .catch((err) => setData({ error: err.toString() }))
// // // // // // //       .finally(() => setLoading(false));
// // // // // // //   };

// // // // // // //   const verdictColor = (v) =>
// // // // // // //     v === "SAFE" ? "green" : v === "VULNERABLE" ? "red" : "orange";

// // // // // // //   return (
// // // // // // //     <div style={{ padding: "30px", background: "#eef6fb", minHeight: "100vh" }}>
// // // // // // //       <h2 style={{ textAlign: "center" }}>
// // // // // // //         Enterprise VAPT Security Dashboard
// // // // // // //       </h2>

// // // // // // //       {/* Target Input */}
// // // // // // //       <div style={{ textAlign: "center", margin: "20px" }}>
// // // // // // //         <input
// // // // // // //           value={target}
// // // // // // //           onChange={(e) => setTarget(e.target.value)}
// // // // // // //           placeholder="Enter target domain"
// // // // // // //           style={{ padding: "10px", width: "320px" }}
// // // // // // //         />
// // // // // // //         <button onClick={fetchData} style={{ marginLeft: "10px" }}>
// // // // // // //           Scan
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* Tabs */}
// // // // // // //       <div style={{ textAlign: "center", marginBottom: "20px" }}>
// // // // // // //         {Object.keys(apiMap).map((tab) => (
// // // // // // //           <button
// // // // // // //             key={tab}
// // // // // // //             onClick={() => setActiveTab(tab)}
// // // // // // //             style={{
// // // // // // //               margin: "5px",
// // // // // // //               padding: "8px 15px",
// // // // // // //               background: activeTab === tab ? "#0b5ed7" : "#7fffd4",
// // // // // // //               color: activeTab === tab ? "#fff" : "#000",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {tab.toUpperCase()}
// // // // // // //           </button>
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
// // // // // // //       {data?.error && <p style={{ color: "red" }}>{data.error}</p>}

// // // // // // //       {/* ================= HOME ================= */}
// // // // // // //       {activeTab === "home" && data && (
// // // // // // //         <div className="card">
// // // // // // //           <h3>Engine Status</h3>
// // // // // // //           <p><b>Engine:</b> {data.engine}</p>
// // // // // // //           <p><b>Status:</b> {data.status}</p>
// // // // // // //           <p><b>Message:</b> {data.message}</p>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* ================= RECON ================= */}
// // // // // // //       {activeTab === "recon" && data && (
// // // // // // //         <div className="card">
// // // // // // //           <h3>Recon Summary</h3>
// // // // // // //           <p><b>Domain:</b> {data.input}</p>
// // // // // // //           <p><b>IP:</b> {data.resolved_ip}</p>
// // // // // // //           <p><b>Asset Type:</b> {data.asset_type}</p>
// // // // // // //           <p><b>Cloud Ready:</b> {data.cloud_ready ? "Yes" : "No"}</p>
// // // // // // //           <p>{data.note}</p>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* ================= FAST / WEB ================= */}
// // // // // // //       {(activeTab === "fast" || activeTab === "web") && data && (
// // // // // // //         <>
// // // // // // //           <div className="card">
// // // // // // //             <h3>{activeTab.toUpperCase()} Scan Result</h3>
// // // // // // //             <p>
// // // // // // //               <b>Verdict:</b>{" "}
// // // // // // //               <span style={{ color: verdictColor(data.verdict) }}>
// // // // // // //                 {data.verdict}
// // // // // // //               </span>
// // // // // // //             </p>
// // // // // // //             <p><b>Security Grade:</b> {data.security_grade}</p>
// // // // // // //             <p><b>Risk %:</b> {data.risk_percentage}</p>
// // // // // // //           </div>

// // // // // // //           {data.open_ports?.map((p, i) => (
// // // // // // //             <div className="card" key={i}>
// // // // // // //               <h4>Port {p.port} ({p.service})</h4>
// // // // // // //               <p><b>Risk:</b> {p.risk}</p>
// // // // // // //               <p><b>Issue:</b> {p.issue}</p>
// // // // // // //               <p><b>Recommendation:</b> {p.recommendation}</p>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </>
// // // // // // //       )}

// // // // // // //       {/* ================= DEEP ================= */}
// // // // // // //       {activeTab === "deep" && data && (
// // // // // // //         <div className="card">
// // // // // // //           <h3>Deep Scan Result</h3>
// // // // // // //           <p>
// // // // // // //             <b>Verdict:</b>{" "}
// // // // // // //             <span style={{ color: verdictColor(data.verdict) }}>
// // // // // // //               {data.verdict}
// // // // // // //             </span>
// // // // // // //           </p>
// // // // // // //           <p><b>Security Grade:</b> {data.security_grade}</p>
// // // // // // //           <p><b>Risk %:</b> {data.risk_percentage}</p>
// // // // // // //           <p>{data.management_summary}</p>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* ================= SSL ================= */}
// // // // // // //       {activeTab === "ssl" && data && (
// // // // // // //         <div className="card">
// // // // // // //           <h3>SSL Scan Result</h3>
// // // // // // //           <p>
// // // // // // //             <b>Verdict:</b>{" "}
// // // // // // //             <span style={{ color: verdictColor(data.verdict) }}>
// // // // // // //               {data.verdict}
// // // // // // //             </span>
// // // // // // //           </p>
// // // // // // //           <p><b>Security Grade:</b> {data.security_grade}</p>
// // // // // // //           <p>{data.management_summary}</p>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* ================= HISTORY ================= */}
// // // // // // //       {activeTab === "history" && Array.isArray(data) && (
// // // // // // //         <>
// // // // // // //           <h3 style={{ textAlign: "center" }}>Scan History</h3>

// // // // // // //           {data.map((item, i) => (
// // // // // // //             <div className="card" key={i}>
// // // // // // //               <p><b>Scan ID:</b> {item.scan_id}</p>
// // // // // // //               <p><b>Time:</b> {item.scan_time}</p>
// // // // // // //               <p><b>Target:</b> {item.input}</p>

// // // // // // //               {item.verdict && (
// // // // // // //                 <p>
// // // // // // //                   <b>Verdict:</b>{" "}
// // // // // // //                   <span style={{ color: verdictColor(item.verdict) }}>
// // // // // // //                     {item.verdict}
// // // // // // //                   </span>
// // // // // // //                 </p>
// // // // // // //               )}

// // // // // // //               {item.security_grade && (
// // // // // // //                 <p><b>Grade:</b> {item.security_grade}</p>
// // // // // // //               )}

// // // // // // //               {item.note && <p>{item.note}</p>}
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </>
// // // // // // //       )}

// // // // // // //       {/* ================= STATS ================= */}
// // // // // // //       {activeTab === "stats" && data && (
// // // // // // //         <>
// // // // // // //           <h3 style={{ textAlign: "center" }}>Overall Scan Statistics</h3>

// // // // // // //           <div className="card">
// // // // // // //             <p><b>Total Scans:</b> {data.total_scans}</p>
// // // // // // //             <p style={{ color: "red" }}>
// // // // // // //               <b>Vulnerable Targets:</b> {data.vulnerable_targets}
// // // // // // //             </p>
// // // // // // //             <p style={{ color: "green" }}>
// // // // // // //               <b>Safe Targets:</b> {data.safe_targets}
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // import { useEffect, useState } from "react";
// // // // // // import "./EmployeeList.css";

// // // // // // const apiMap = {
// // // // // //   home: "/home",
// // // // // //   recon: "/recon",
// // // // // //   fast: "/scan/fast",
// // // // // //   deep: "/scan/deep",
// // // // // //   web: "/scan/web",
// // // // // //   ssl: "/scan/ssl",
// // // // // //   history: "/history",
// // // // // //   stats: "/stats",
// // // // // // };

// // // // // // export default function EmployeeList() {
// // // // // //   const [activeTab, setActiveTab] = useState("home");
// // // // // //   const [data, setData] = useState(null);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [target, setTarget] = useState("demo.preview-workspace.com");

// // // // // //   useEffect(() => {
// // // // // //     fetchData();
// // // // // //   }, [activeTab]);

// // // // // //   const fetchData = () => {
// // // // // //     setLoading(true);
// // // // // //     setData(null);

// // // // // //     let url = apiMap[activeTab];
// // // // // //     if (!["home", "history", "stats"].includes(activeTab)) {
// // // // // //       url = `${url}?target=${encodeURIComponent(target)}`;
// // // // // //     }

// // // // // //     fetch(url)
// // // // // //       .then((res) => res.json())
// // // // // //       .then((d) => setData(d))
// // // // // //       .catch((err) => setData({ error: err.toString() }))
// // // // // //       .finally(() => setLoading(false));
// // // // // //   };

// // // // // //   const verdictColor = (v) =>
// // // // // //     v === "SAFE" ? "green" : v === "VULNERABLE" ? "red" : "orange";

// // // // // //   return (
// // // // // //     <div style={{ padding: "30px", background: "#eef6fb", minHeight: "100vh" }}>
// // // // // //       <h2 style={{ textAlign: "center" }}>
// // // // // //         Enterprise VAPT Security Dashboard
// // // // // //       </h2>

// // // // // //       {/* Target */}
// // // // // //       <div style={{ textAlign: "center", margin: "20px" }}>
// // // // // //         <input
// // // // // //           value={target}
// // // // // //           onChange={(e) => setTarget(e.target.value)}
// // // // // //           placeholder="Enter target domain"
// // // // // //           style={{ padding: "10px", width: "320px" }}
// // // // // //         />
// // // // // //         <button onClick={fetchData} style={{ marginLeft: "10px" }}>
// // // // // //           Scan
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* Tabs */}
// // // // // //       <div style={{ textAlign: "center", marginBottom: "20px" }}>
// // // // // //         {Object.keys(apiMap).map((tab) => (
// // // // // //           <button
// // // // // //             key={tab}
// // // // // //             onClick={() => setActiveTab(tab)}
// // // // // //             style={{
// // // // // //               margin: "6px",
// // // // // //               padding: "8px 16px",
// // // // // //               background: activeTab === tab ? "#0b5ed7" : "#7fffd4",
// // // // // //               color: activeTab === tab ? "#fff" : "#000",
// // // // // //             }}
// // // // // //           >
// // // // // //             {tab.toUpperCase()}
// // // // // //           </button>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
// // // // // //       {data?.error && <p style={{ color: "red" }}>{data.error}</p>}

// // // // // //       {/* ================= HOME (FIXED COMPLETE) ================= */}
// // // // // //       {activeTab === "home" && data && (
// // // // // //         <>
// // // // // //           {/* Engine Info */}
// // // // // //           <div className="card">
// // // // // //             <h3>🛠 Engine Information</h3>
// // // // // //             <p><b>Engine:</b> {data.engine}</p>
// // // // // //             <p>
// // // // // //               <b>Status:</b>{" "}
// // // // // //               <span style={{ color: "green", fontWeight: "bold" }}>
// // // // // //                 {data.status}
// // // // // //               </span>
// // // // // //             </p>
// // // // // //             <p><b>Message:</b> {data.message}</p>
// // // // // //           </div>

// // // // // //           {/* Modules */}
// // // // // //           <div className="card">
// // // // // //             <h3>📦 Available Modules</h3>
// // // // // //             <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
// // // // // //               {data.modules?.map((module, index) => (
// // // // // //                 <span
// // // // // //                   key={index}
// // // // // //                   style={{
// // // // // //                     padding: "6px 14px",
// // // // // //                     background: "#e0f2ff",
// // // // // //                     borderRadius: "20px",
// // // // // //                     fontSize: "14px",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {module}
// // // // // //                 </span>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* API Endpoints */}
// // // // // //           <div className="card">
// // // // // //             <h3>🔗 Available API Endpoints</h3>

// // // // // //             {Object.entries(data.available_endpoints || {}).map(
// // // // // //               ([key, value]) => (
// // // // // //                 <div
// // // // // //                   key={key}
// // // // // //                   style={{
// // // // // //                     display: "flex",
// // // // // //                     justifyContent: "space-between",
// // // // // //                     padding: "8px 0",
// // // // // //                     borderBottom: "1px solid #ddd",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   <b>{key.toUpperCase()}</b>
// // // // // //                   <span style={{ fontFamily: "monospace" }}>{value}</span>
// // // // // //                 </div>
// // // // // //               )
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </>
// // // // // //       )}

// // // // // //       {/* ================= RECON ================= */}
// // // // // //       {activeTab === "recon" && data && (
// // // // // //         <div className="card">
// // // // // //           <h3>Recon Summary</h3>
// // // // // //           <p><b>Target:</b> {data.input}</p>
// // // // // //           <p><b>IP:</b> {data.resolved_ip}</p>
// // // // // //           <p><b>Asset Type:</b> {data.asset_type}</p>
// // // // // //           <p>{data.note}</p>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* ================= FAST / WEB ================= */}
// // // // // //       {(activeTab === "fast" || activeTab === "web") && data && (
// // // // // //         <>
// // // // // //           <div className="card">
// // // // // //             <h3>{activeTab.toUpperCase()} Scan Result</h3>
// // // // // //             <p>
// // // // // //               <b>Verdict:</b>{" "}
// // // // // //               <span style={{ color: verdictColor(data.verdict) }}>
// // // // // //                 {data.verdict}
// // // // // //               </span>
// // // // // //             </p>
// // // // // //             <p><b>Security Grade:</b> {data.security_grade}</p>
// // // // // //             <p><b>Risk %:</b> {data.risk_percentage}</p>
// // // // // //           </div>

// // // // // //           {data.open_ports?.map((p, i) => (
// // // // // //             <div className="card" key={i}>
// // // // // //               <h4>Port {p.port} ({p.service})</h4>
// // // // // //               <p><b>Risk:</b> {p.risk}</p>
// // // // // //               <p><b>Issue:</b> {p.issue}</p>
// // // // // //               <p><b>Recommendation:</b> {p.recommendation}</p>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </>
// // // // // //       )}

// // // // // //       {/* ================= DEEP ================= */}
// // // // // //       {activeTab === "deep" && data && (
// // // // // //         <div className="card">
// // // // // //           <h3>Deep Scan Result</h3>
// // // // // //           <p>
// // // // // //             <b>Verdict:</b>{" "}
// // // // // //             <span style={{ color: verdictColor(data.verdict) }}>
// // // // // //               {data.verdict}
// // // // // //             </span>
// // // // // //           </p>
// // // // // //           <p><b>Security Grade:</b> {data.security_grade}</p>
// // // // // //           <p>{data.management_summary}</p>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* ================= SSL ================= */}
// // // // // //       {activeTab === "ssl" && data && (
// // // // // //         <div className="card">
// // // // // //           <h3>SSL Scan Result</h3>
// // // // // //           <p>
// // // // // //             <b>Verdict:</b>{" "}
// // // // // //             <span style={{ color: verdictColor(data.verdict) }}>
// // // // // //               {data.verdict}
// // // // // //             </span>
// // // // // //           </p>
// // // // // //           <p><b>Security Grade:</b> {data.security_grade}</p>
// // // // // //           <p>{data.management_summary}</p>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* ================= STATS ================= */}
// // // // // //       {activeTab === "stats" && data && (
// // // // // //         <div className="card">
// // // // // //           <h3>📊 Platform Statistics</h3>
// // // // // //           <p><b>Total Scans:</b> {data.total_scans}</p>
// // // // // //           <p style={{ color: "red" }}>
// // // // // //             <b>Vulnerable Targets:</b> {data.vulnerable_targets}
// // // // // //           </p>
// // // // // //           <p style={{ color: "green" }}>
// // // // // //             <b>Safe Targets:</b> {data.safe_targets}
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import { useEffect, useState } from "react";
// // // // // import "./EmployeeList.css";

// // // // // const apiMap = {
// // // // //   home: "/home",
// // // // //   recon: "/recon",
// // // // //   fast: "/scan/fast",
// // // // //   deep: "/scan/deep",
// // // // //   web: "/scan/web",
// // // // //   ssl: "/scan/ssl",
// // // // //   history: "/history",
// // // // //   stats: "/stats",
// // // // // };

// // // // // export default function EmployeeList() {
// // // // //   const [activeTab, setActiveTab] = useState("home");
// // // // //   const [data, setData] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [target, setTarget] = useState("demo.preview-workspace.com");

// // // // //   useEffect(() => {
// // // // //     fetchData();
// // // // //   }, [activeTab]);

// // // // //   const fetchData = () => {
// // // // //     setLoading(true);
// // // // //     setData(null);

// // // // //     let url = apiMap[activeTab];
// // // // //     if (!["home", "history", "stats"].includes(activeTab)) {
// // // // //       url = `${url}?target=${encodeURIComponent(target)}`;
// // // // //     }

// // // // //     fetch(url)
// // // // //       .then((res) => res.json())
// // // // //       .then((d) => setData(d))
// // // // //       .catch((err) => setData({ error: err.toString() }))
// // // // //       .finally(() => setLoading(false));
// // // // //   };

// // // // //   const verdictColor = (v) =>
// // // // //     v === "SAFE" ? "green" : v === "VULNERABLE" ? "red" : "orange";

// // // // //   const renderKeyValue = (obj) =>
// // // // //     Object.entries(obj).map(([key, value]) => (
// // // // //       <div
// // // // //         key={key}
// // // // //         style={{
// // // // //           display: "flex",
// // // // //           justifyContent: "space-between",
// // // // //           padding: "6px 0",
// // // // //           borderBottom: "1px solid #e0e0e0",
// // // // //         }}
// // // // //       >
// // // // //         <b>{key.replaceAll("_", " ").toUpperCase()}</b>
// // // // //         <span>
// // // // //           {typeof value === "boolean"
// // // // //             ? value
// // // // //               ? "Yes"
// // // // //               : "No"
// // // // //             : value?.toString()}
// // // // //         </span>
// // // // //       </div>
// // // // //     ));

// // // // //   return (
// // // // //     <div style={{ padding: "30px", background: "#eef6fb", minHeight: "100vh" }}>
// // // // //       <h2 style={{ textAlign: "center" }}>
// // // // //         Enterprise VAPT Security Dashboard
// // // // //       </h2>

// // // // //       {/* Target Input */}
// // // // //       <div style={{ textAlign: "center", margin: "20px" }}>
// // // // //         <input
// // // // //           value={target}
// // // // //           onChange={(e) => setTarget(e.target.value)}
// // // // //           placeholder="Enter target domain"
// // // // //           style={{ padding: "10px", width: "320px" }}
// // // // //         />
// // // // //         <button onClick={fetchData} style={{ marginLeft: "10px" }}>
// // // // //           Scan
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Tabs */}
// // // // //       <div style={{ textAlign: "center", marginBottom: "20px" }}>
// // // // //         {Object.keys(apiMap).map((tab) => (
// // // // //           <button
// // // // //             key={tab}
// // // // //             onClick={() => setActiveTab(tab)}
// // // // //             style={{
// // // // //               margin: "6px",
// // // // //               padding: "8px 16px",
// // // // //               background: activeTab === tab ? "#0b5ed7" : "#7fffd4",
// // // // //               color: activeTab === tab ? "#fff" : "#000",
// // // // //             }}
// // // // //           >
// // // // //             {tab.toUpperCase()}
// // // // //           </button>
// // // // //         ))}
// // // // //       </div>

// // // // //       {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
// // // // //       {data?.error && <p style={{ color: "red" }}>{data.error}</p>}

// // // // //       {/* ================= HOME (FULL) ================= */}
// // // // //       {activeTab === "home" && data && (
// // // // //         <>
// // // // //           <div className="card">
// // // // //             <h3>🛠 Platform Status</h3>
// // // // //             {renderKeyValue({
// // // // //               engine: data.engine,
// // // // //               status: data.status,
// // // // //               message: data.message,
// // // // //             })}
// // // // //           </div>

// // // // //           <div className="card">
// // // // //             <h3>📦 Supported Modules</h3>
// // // // //             {data.modules.map((m, i) => (
// // // // //               <div key={i}>• {m}</div>
// // // // //             ))}
// // // // //           </div>

// // // // //           <div className="card">
// // // // //             <h3>🔗 API Endpoints</h3>
// // // // //             {renderKeyValue(data.available_endpoints)}
// // // // //           </div>
// // // // //         </>
// // // // //       )}

// // // // //       {/* ================= RECON (FULL – NOTHING SKIPPED) ================= */}
// // // // //       {activeTab === "recon" && data && (
// // // // //         <div className="card">
// // // // //           <h3>🛰 Recon Scan Details</h3>
// // // // //           {renderKeyValue(data)}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* ================= FAST / WEB ================= */}
// // // // //       {(activeTab === "fast" || activeTab === "web") && data && (
// // // // //         <>
// // // // //           <div className="card">
// // // // //             <h3>{activeTab.toUpperCase()} Scan Summary</h3>
// // // // //             <p>
// // // // //               <b>Verdict:</b>{" "}
// // // // //               <span style={{ color: verdictColor(data.verdict) }}>
// // // // //                 {data.verdict}
// // // // //               </span>
// // // // //             </p>
// // // // //             <p><b>Security Grade:</b> {data.security_grade}</p>
// // // // //             <p><b>Risk %:</b> {data.risk_percentage}</p>
// // // // //           </div>

// // // // //           {data.open_ports?.map((p, i) => (
// // // // //             <div className="card" key={i}>
// // // // //               {renderKeyValue(p)}
// // // // //             </div>
// // // // //           ))}
// // // // //         </>
// // // // //       )}

// // // // //       {/* ================= DEEP ================= */}
// // // // //       {activeTab === "deep" && data && (
// // // // //         <div className="card">
// // // // //           <h3>🔍 Deep Scan Result</h3>
// // // // //           {renderKeyValue(data)}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* ================= SSL ================= */}
// // // // //       {activeTab === "ssl" && data && (
// // // // //         <div className="card">
// // // // //           <h3>🔐 SSL Scan Result</h3>
// // // // //           {renderKeyValue(data)}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* ================= HISTORY ================= */}
// // // // //       {activeTab === "history" && Array.isArray(data) && (
// // // // //         <>
// // // // //           {data.map((item, index) => (
// // // // //             <div className="card" key={index}>
// // // // //               <h4>Scan #{index + 1}</h4>
// // // // //               {renderKeyValue(item)}
// // // // //             </div>
// // // // //           ))}
// // // // //         </>
// // // // //       )}

// // // // //       {/* ================= STATS ================= */}
// // // // //       {activeTab === "stats" && data && (
// // // // //         <div className="card">
// // // // //           <h3>📊 Statistics</h3>
// // // // //           {renderKeyValue(data)}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import { useEffect, useState } from "react";
// // // // import "./EmployeeList.css";

// // // // const apiMap = {
// // // //   home: "/home",
// // // //   recon: "/recon",
// // // //   fast: "/scan/fast",
// // // //   deep: "/scan/deep",
// // // //   web: "/scan/web",
// // // //   ssl: "/scan/ssl",
// // // //   history: "/history",
// // // //   stats: "/stats",
// // // // };

// // // // export default function EmployeeList() {
// // // //   const [activeTab, setActiveTab] = useState("home");
// // // //   const [data, setData] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [target, setTarget] = useState("demo.preview-workspace.com");

// // // //   useEffect(() => {
// // // //     fetchData();
// // // //   }, [activeTab]);

// // // //   const fetchData = () => {
// // // //     setLoading(true);
// // // //     setData(null);

// // // //     let url = apiMap[activeTab];
// // // //     if (!["home", "history", "stats"].includes(activeTab)) {
// // // //       url = `${url}?target=${encodeURIComponent(target)}`;
// // // //     }

// // // //     fetch(url)
// // // //       .then((res) => res.json())
// // // //       .then((d) => setData(d))
// // // //       .catch((err) => setData({ error: err.toString() }))
// // // //       .finally(() => setLoading(false));
// // // //   };

// // // //   const verdictColor = (v) =>
// // // //     v === "SAFE" ? "green" : v === "VULNERABLE" ? "red" : "orange";

// // // //   const renderKeyValue = (obj) =>
// // // //     Object.entries(obj).map(([key, value]) => (
// // // //       <div
// // // //         key={key}
// // // //         style={{
// // // //           display: "flex",
// // // //           justifyContent: "space-between",
// // // //           padding: "6px 0",
// // // //           borderBottom: "1px solid #e0e0e0",
// // // //         }}
// // // //       >
// // // //         <b>{key.replaceAll("_", " ").toUpperCase()}</b>
// // // //         <span>
// // // //           {Array.isArray(value)
// // // //             ? value.join(", ")
// // // //             : typeof value === "boolean"
// // // //             ? value
// // // //               ? "Yes"
// // // //               : "No"
// // // //             : value?.toString()}
// // // //         </span>
// // // //       </div>
// // // //     ));

// // // //   return (
// // // //     <div style={{ padding: "30px", background: "#eef6fb", minHeight: "100vh" }}>
// // // //       <h2 style={{ textAlign: "center" }}>
// // // //         Enterprise VAPT Security Dashboard
// // // //       </h2>

// // // //       {/* Target Input */}
// // // //       <div style={{ textAlign: "center", margin: "20px" }}>
// // // //         <input
// // // //           value={target}
// // // //           onChange={(e) => setTarget(e.target.value)}
// // // //           placeholder="Enter target domain"
// // // //           style={{ padding: "10px", width: "320px" }}
// // // //         />
// // // //         <button onClick={fetchData} style={{ marginLeft: "10px" }}>
// // // //           Scan
// // // //         </button>
// // // //       </div>

// // // //       {/* Tabs */}
// // // //       <div style={{ textAlign: "center", marginBottom: "20px" }}>
// // // //         {Object.keys(apiMap).map((tab) => (
// // // //           <button
// // // //             key={tab}
// // // //             onClick={() => setActiveTab(tab)}
// // // //             style={{
// // // //               margin: "6px",
// // // //               padding: "8px 16px",
// // // //               background: activeTab === tab ? "#0b5ed7" : "#7fffd4",
// // // //               color: activeTab === tab ? "#fff" : "#000",
// // // //             }}
// // // //           >
// // // //             {tab.toUpperCase()}
// // // //           </button>
// // // //         ))}
// // // //       </div>

// // // //       {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
// // // //       {data?.error && <p style={{ color: "red" }}>{data.error}</p>}

// // // //       {/* ================= HOME ================= */}
// // // //       {activeTab === "home" && data && (
// // // //         <>
// // // //           <div className="card">
// // // //             <h3>🛠 Platform Status</h3>
// // // //             {renderKeyValue({
// // // //               engine: data.engine,
// // // //               status: data.status,
// // // //               message: data.message,
// // // //             })}
// // // //           </div>

// // // //           <div className="card">
// // // //             <h3>📦 Supported Modules</h3>
// // // //             {data.modules.map((m, i) => (
// // // //               <div key={i}>• {m}</div>
// // // //             ))}
// // // //           </div>

// // // //           <div className="card">
// // // //             <h3>🔗 API Endpoints</h3>
// // // //             {renderKeyValue(data.available_endpoints)}
// // // //           </div>
// // // //         </>
// // // //       )}

// // // //       {/* ================= RECON ================= */}
// // // //       {activeTab === "recon" && data && (
// // // //         <div className="card">
// // // //           <h3>🛰 Recon Scan Details</h3>
// // // //           {renderKeyValue(data)}
// // // //         </div>
// // // //       )}

// // // //       {/* ================= FAST (FULLY ADDED) ================= */}
// // // //       {activeTab === "fast" && data && (
// // // //         <>
// // // //           <div className="card">
// // // //             <h3>⚡ Fast Scan Summary</h3>
// // // //             <p><b>Scan ID:</b> {data.scan_id}</p>
// // // //             <p><b>Scan Time:</b> {data.scan_time}</p>
// // // //             <p><b>Duration:</b> {data.scan_duration_seconds}s</p>
// // // //             <p><b>Target:</b> {data.input}</p>
// // // //             <p><b>Resolved IP:</b> {data.resolved_ip}</p>
// // // //             <p>
// // // //               <b>Verdict:</b>{" "}
// // // //               <span style={{ color: verdictColor(data.verdict), fontWeight: "bold" }}>
// // // //                 {data.verdict}
// // // //               </span>
// // // //             </p>
// // // //             <p><b>Security Grade:</b> {data.security_grade}</p>
// // // //             <p><b>Risk %:</b> {data.risk_percentage}</p>
// // // //             <p><b>Attack Surface Score:</b> {data.attack_surface_score}</p>
// // // //           </div>

// // // //           <div className="card">
// // // //             <h3>📊 Attack Surface</h3>
// // // //             {renderKeyValue(data.attack_surface)}
// // // //           </div>

// // // //           {data.open_ports?.map((port, index) => (
// // // //             <div className="card" key={index}>
// // // //               <h3>🚨 Open Port: {port.port}</h3>
// // // //               {renderKeyValue(port)}
// // // //             </div>
// // // //           ))}

// // // //           <div className="card">
// // // //             <h3>🧠 Management Summary</h3>
// // // //             <p>{data.management_summary}</p>
// // // //           </div>

// // // //           <div className="card">
// // // //             <h3>📌 Note</h3>
// // // //             <p>{data.note}</p>
// // // //           </div>
// // // //         </>
// // // //       )}

// // // //       {/* ================= FALLBACK (other tabs already working) ================= */}
// // // //       {["deep", "web", "ssl", "history", "stats"].includes(activeTab) && data && (
// // // //         <pre style={{ background: "#fff", padding: "15px" }}>
// // // //           {JSON.stringify(data, null, 2)}
// // // //         </pre>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }
// // // import React, { useState } from "react";

// // // /* =====================
// // //    COMMON RENDER HELPER
// // // ===================== */
// // // const renderKeyValue = (obj) => {
// // //   if (!obj || typeof obj !== "object") return null;

// // //   return Object.entries(obj).map(([key, value]) => (
// // //     <div key={key} style={{ marginLeft: "12px" }}>
// // //       <strong>{key}:</strong>{" "}
// // //       {Array.isArray(value) ? value.join(", ") : String(value)}
// // //     </div>
// // //   ));
// // // };

// // // /* =====================
// // //    MAIN COMPONENT
// // // ===================== */
// // // export default function EmployeeList() {
// // //   const [screen, setScreen] = useState("home");

// // //   /* =====================
// // //      HOME RESPONSE
// // //   ===================== */
// // //   const homeData = {
// // //     engine: "Enterprise Automated VAPT Scanner",
// // //     status: "Running",
// // //     message: "VAPT platform is operational",
// // //     modules: [
// // //       "Recon",
// // //       "Fast Scan",
// // //       "Deep Scan",
// // //       "Web Scan",
// // //       "SSL Scan",
// // //       "Attack Surface Mapping",
// // //       "OWASP Top10 Mapping",
// // //       "Threat Intelligence Layer",
// // //       "Misconfiguration Detection",
// // //       "Compliance Hints",
// // //       "Risk Scoring Engine",
// // //       "Management Summary",
// // //       "History",
// // //       "Stats",
// // //     ],
// // //     available_endpoints: {
// // //       recon: "/recon?target=domain",
// // //       fast: "/scan/fast?target=domain",
// // //       deep: "/scan/deep?target=domain",
// // //       web: "/scan/web?target=domain",
// // //       ssl: "/scan/ssl?target=domain",
// // //       history: "/history",
// // //       stats: "/stats",
// // //     },
// // //   };

// // //   /* =====================
// // //      RECON RESPONSE
// // //   ===================== */
// // //   const reconData = {
// // //     scan_id: "40266d19-eb63-4633-b082-65d96995d14a",
// // //     module: "RECON",
// // //     scan_time: "2026-01-16 12:32:11.839174",
// // //     input: "demo.preview-workspace.com",
// // //     resolved_ip: "20.197.47.46",
// // //     reverse_dns: "20.197.47.46",
// // //     asset_type: "Public Internet Host",
// // //     cloud_ready: true,
// // //     note: "Reconnaissance & asset identification phase",
// // //   };

// // //   /* =====================
// // //      FAST RESPONSE
// // //   ===================== */
// // //   const fastData = {
// // //     scan_id: "8dba2f04-2831-4a66-889f-c09d63406dc2",
// // //     scan_time: "2026-01-16 12:41:54.088180",
// // //     scan_duration_seconds: 1.63,
// // //     engine: "Enterprise Automated VAPT Scanner",
// // //     mode: "FAST",
// // //     input: "demo.preview-workspace.com",
// // //     resolved_ip: "20.197.47.46",
// // //     verdict: "VULNERABLE",
// // //     security_grade: "C (Medium Risk)",
// // //     risk_percentage: 53,
// // //     attack_surface_score: 13.3,
// // //     attack_surface: {
// // //       total_open_ports: 2,
// // //       high_risk_ports: 2,
// // //     },
// // //     open_ports: [
// // //       {
// // //         port: 22,
// // //         service: "ssh",
// // //         risk: "HIGH",
// // //         severity_score: 6.8,
// // //         possible_attacks: ["Brute force", "Lateral movement"],
// // //         issue: "SSH exposed",
// // //         recommendation: "Restrict public access & harden configuration",
// // //         compliance: ["OWASP A2"],
// // //       },
// // //       {
// // //         port: 80,
// // //         service: "http",
// // //         risk: "HIGH",
// // //         severity_score: 6.5,
// // //         possible_attacks: ["SQLi", "XSS"],
// // //         issue: "HTTP exposed",
// // //         recommendation: "Restrict public access & harden configuration",
// // //         compliance: ["OWASP A1", "A3"],
// // //       },
// // //     ],
// // //     management_summary:
// // //       "High risk services found. Security hardening strongly recommended.",
// // //     note:
// // //       "Enterprise VAPT assessment with recon, web, deep, SSL scanning.",
// // //   };

// // //   /* =====================
// // //      UI
// // //   ===================== */
// // //   return (
// // //     <div style={{ padding: 20 }}>
// // //       <h1>🛡 Enterprise VAPT Dashboard</h1>

// // //       {/* NAV BUTTONS */}
// // //       <div style={{ marginBottom: 20 }}>
// // //         <button onClick={() => setScreen("home")}>Home</button>{" "}
// // //         <button onClick={() => setScreen("recon")}>Recon</button>{" "}
// // //         <button onClick={() => setScreen("fast")}>Fast</button>
// // //       </div>

// // //       {/* ================= HOME ================= */}
// // //       {screen === "home" && (
// // //         <div>
// // //           <h2>🏠 Home Status</h2>
// // //           {renderKeyValue(homeData)}

// // //           <h3>📦 Modules</h3>
// // //           {Array.isArray(homeData.modules) &&
// // //             homeData.modules.map((m, i) => (
// // //               <div key={i}>• {m}</div>
// // //             ))}

// // //           <h3>🔗 API Endpoints</h3>
// // //           {renderKeyValue(homeData.available_endpoints)}
// // //         </div>
// // //       )}

// // //       {/* ================= RECON ================= */}
// // //       {screen === "recon" && (
// // //         <div>
// // //           <h2>🔍 Recon Scan</h2>
// // //           {renderKeyValue(reconData)}
// // //         </div>
// // //       )}

// // //       {/* ================= FAST ================= */}
// // //       {screen === "fast" && (
// // //         <div>
// // //           <h2>⚡ Fast Scan</h2>
// // //           {renderKeyValue(fastData)}

// // //           <h3>🚨 Open Ports</h3>
// // //           {Array.isArray(fastData.open_ports) &&
// // //             fastData.open_ports.map((port, index) => (
// // //               <div
// // //                 key={index}
// // //                 style={{
// // //                   border: "1px solid #ccc",
// // //                   marginBottom: 10,
// // //                   padding: 10,
// // //                 }}
// // //               >
// // //                 {renderKeyValue(port)}
// // //               </div>
// // //             ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // import React, { useState } from "react";
// // import "./EmployeeList.css"

// // /* =========================
// //    SAFE KEY VALUE RENDERER
// // ========================= */
// // const renderKeyValue = (obj) => {
// //   if (!obj || typeof obj !== "object" || Array.isArray(obj)) return null;

// //   return Object.entries(obj).map(([key, value]) => {
// //     if (value === null || value === undefined) {
// //       return (
// //         <div key={key}>
// //           <strong>{key}:</strong> N/A
// //         </div>
// //       );
// //     }

// //     if (typeof value === "object") {
// //       return (
// //         <div key={key} style={{ marginLeft: "12px" }}>
// //           <strong>{key}:</strong>
// //           <div style={{ marginLeft: "12px" }}>
// //             {renderKeyValue(value)}
// //           </div>
// //         </div>
// //       );
// //     }

// //     return (
// //       <div key={key}>
// //         <strong>{key}:</strong> {String(value)}
// //       </div>
// //     );
// //   });
// // };

// // export default function EmployeeList() {
// //   const [screen, setScreen] = useState("home");

// //   /* ================= HOME ================= */
// //   const homeData = {
// //     engine: "Enterprise Automated VAPT Scanner",
// //     status: "Running",
// //     message: "VAPT platform is operational",
// //     modules: [
// //       "Recon",
// //       "Fast Scan",
// //       "Deep Scan",
// //       "Web Scan",
// //       "SSL Scan",
// //       "Attack Surface Mapping",
// //       "OWASP Top10 Mapping",
// //       "Threat Intelligence Layer",
// //       "Compliance Hints",
// //       "Risk Scoring Engine",
// //       "History",
// //       "Stats",
// //     ],
// //     available_endpoints: {
// //       recon: "/recon?target=domain",
// //       fast: "/scan/fast?target=domain",
// //       deep: "/scan/deep?target=domain",
// //       web: "/scan/web?target=domain",
// //       ssl: "/scan/ssl?target=domain",
// //       history: "/history",
// //       stats: "/stats",
// //     },
// //   };

// //   /* ================= RECON ================= */
// //   const reconData = {
// //     scan_id: "40266d19-eb63-4633-b082-65d96995d14a",
// //     module: "RECON",
// //     scan_time: "2026-01-16 12:32:11.839174",
// //     input: "demo.preview-workspace.com",
// //     resolved_ip: "20.197.47.46",
// //     reverse_dns: "20.197.47.46",
// //     asset_type: "Public Internet Host",
// //     cloud_ready: true,
// //     note: "Reconnaissance & asset identification phase",
// //   };

// //   /* ================= FAST ================= */
// //   const fastData = {
// //     scan_id: "8dba2f04-2831-4a66-889f-c09d63406dc2",
// //     scan_time: "2026-01-16 12:41:54.088180",
// //     scan_duration_seconds: 1.63,
// //     engine: "Enterprise Automated VAPT Scanner",
// //     mode: "FAST",
// //     input: "demo.preview-workspace.com",
// //     resolved_ip: "20.197.47.46",
// //     verdict: "VULNERABLE",
// //     security_grade: "C (Medium Risk)",
// //     risk_percentage: 53,
// //     attack_surface_score: 13.3,
// //     attack_surface: {
// //       total_open_ports: 2,
// //       high_risk_ports: 2,
// //     },
// //     open_ports: [
// //       {
// //         port: 22,
// //         service: "ssh",
// //         risk: "HIGH",
// //         severity_score: 6.8,
// //         possible_attacks: ["Brute force", "Lateral movement"],
// //         issue: "SSH exposed",
// //         recommendation: "Restrict public access & harden configuration",
// //         compliance: ["OWASP A2"],
// //       },
// //       {
// //         port: 80,
// //         service: "http",
// //         risk: "HIGH",
// //         severity_score: 6.5,
// //         possible_attacks: ["SQLi", "XSS"],
// //         issue: "HTTP exposed",
// //         recommendation: "Restrict public access & harden configuration",
// //         compliance: ["OWASP A1", "A3"],
// //       },
// //     ],
// //     management_summary:
// //       "High risk services found. Security hardening strongly recommended.",
// //   };

// //   return (
// //     <div style={{ padding: 20 }}>
// //       <h1>🛡 Enterprise VAPT Dashboard</h1>

// //       {/* NAV */}
// //       <div style={{ marginBottom: 20 }}>
// //         <button onClick={() => setScreen("home")}>Home</button>{" "}
// //         <button onClick={() => setScreen("recon")}>Recon</button>{" "}
// //         <button onClick={() => setScreen("fast")}>Fast</button>
// //       </div>

// //       {/* HOME */}
// //       {screen === "home" && (
// //         <>
// //           <h2>🏠 Home</h2>
// //           {renderKeyValue(homeData)}

// //           <h3>📦 Modules</h3>
// //           {homeData.modules.map((m, i) => (
// //             <div key={i}>• {m}</div>
// //           ))}

// //           <h3>🔗 Endpoints</h3>
// //           {renderKeyValue(homeData.available_endpoints)}
// //         </>
// //       )}

// //       {/* RECON */}
// //       {screen === "recon" && (
// //         <>
// //           <h2>🔍 Recon Scan</h2>
// //           {renderKeyValue(reconData)}
// //         </>
// //       )}

// //       {/* FAST */}
// //       {screen === "fast" && (
// //         <>
// //           <h2>⚡ Fast Scan</h2>
// //           {renderKeyValue(fastData)}

// //           <h3>🚨 Open Ports</h3>
// //           {fastData.open_ports.map((port, i) => (
// //             <div
// //               key={i}
// //               style={{
// //                 border: "1px solid #ccc",
// //                 padding: 10,
// //                 marginBottom: 10,
// //               }}
// //             >
// //               {renderKeyValue(port)}

// //               <strong>Possible Attacks:</strong>
// //               <ul>
// //                 {port.possible_attacks.map((a, idx) => (
// //                   <li key={idx}>{a}</li>
// //                 ))}
// //               </ul>

// //               <strong>Compliance:</strong>
// //               <ul>
// //                 {port.compliance.map((c, idx) => (
// //                   <li key={idx}>{c}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </>
// //       )}
// //     </div>
// //   );
// // }
// import React, { useState } from "react";

// /* =========================
//    SAFE RENDER UTILITIES
// ========================= */

// const isObject = (v) =>
//   v && typeof v === "object" && !Array.isArray(v);

// const RenderValue = ({ value }) => {
//   if (value === null || value === undefined) return <span>N/A</span>;

//   if (Array.isArray(value)) {
//     return (
//       <ul>
//         {value.map((item, i) => (
//           <li key={i}>
//             {isObject(item) ? <RenderObject data={item} /> : String(item)}
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   if (isObject(value)) {
//     return <RenderObject data={value} />;
//   }

//   return <span>{String(value)}</span>;
// };

// const RenderObject = ({ data }) => {
//   if (!isObject(data)) return null;

//   return (
//     <div style={{ paddingLeft: "12px" }}>
//       {Object.entries(data).map(([key, value]) => (
//         <div key={key} style={{ marginBottom: "6px" }}>
//           <strong>{key}:</strong> <RenderValue value={value} />
//         </div>
//       ))}
//     </div>
//   );
// };

// /* =========================
//    MAIN COMPONENT
// ========================= */

// export default function EmployeeList() {
//   const [active, setActive] = useState("home");

//   /* ================= HOME ================= */
//   const homeData = {
//     engine: "Enterprise Automated VAPT Scanner",
//     status: "Running",
//     message: "VAPT platform is operational",
//     modules: [
//       "Recon",
//       "Fast Scan",
//       "Deep Scan",
//       "Web Scan",
//       "SSL Scan",
//       "Attack Surface Mapping",
//       "OWASP Top10 Mapping",
//       "Threat Intelligence Layer",
//       "Misconfiguration Detection",
//       "Compliance Hints",
//       "Risk Scoring Engine",
//       "Management Summary",
//       "History",
//       "Stats",
//     ],
//     available_endpoints: {
//       recon: "/recon?target=domain",
//       fast: "/scan/fast?target=domain",
//       deep: "/scan/deep?target=domain",
//       web: "/scan/web?target=domain",
//       ssl: "/scan/ssl?target=domain",
//       history: "/history",
//       stats: "/stats",
//     },
//   };

//   /* ================= RECON ================= */
//   const reconData = {
//     scan_id: "40266d19-eb63-4633-b082-65d96995d14a",
//     module: "RECON",
//     scan_time: "2026-01-16 12:32:11.839174",
//     input: "demo.preview-workspace.com",
//     resolved_ip: "20.197.47.46",
//     reverse_dns: "20.197.47.46",
//     asset_type: "Public Internet Host",
//     cloud_ready: true,
//     note: "Reconnaissance & asset identification phase",
//   };

//   /* ================= FAST ================= */
//   const fastData = {
//     scan_id: "8dba2f04-2831-4a66-889f-c09d63406dc2",
//     scan_time: "2026-01-16 12:41:54.088180",
//     scan_duration_seconds: 1.63,
//     engine: "Enterprise Automated VAPT Scanner",
//     mode: "FAST",
//     input: "demo.preview-workspace.com",
//     resolved_ip: "20.197.47.46",
//     verdict: "VULNERABLE",
//     security_grade: "C (Medium Risk)",
//     risk_percentage: 53,
//     attack_surface_score: 13.3,
//     attack_surface: {
//       total_open_ports: 2,
//       high_risk_ports: 2,
//     },
//     open_ports: [
//       {
//         port: 22,
//         service: "ssh",
//         risk: "HIGH",
//         severity_score: 6.8,
//         possible_attacks: ["Brute force", "Lateral movement"],
//         issue: "SSH exposed",
//         recommendation: "Restrict public access & harden configuration",
//         compliance: ["OWASP A2"],
//       },
//       {
//         port: 80,
//         service: "http",
//         risk: "HIGH",
//         severity_score: 6.5,
//         possible_attacks: ["SQLi", "XSS"],
//         issue: "HTTP exposed",
//         recommendation: "Restrict public access & harden configuration",
//         compliance: ["OWASP A1", "A3"],
//       },
//     ],
//     management_summary:
//       "High risk services found. Security hardening strongly recommended.",
//   };

//   /* ================= PLACEHOLDER (NEXT APIs) ================= */
//   const deepData = { message: "Deep scan data will render here" };
//   const webData = { message: "Web scan data will render here" };
//   const sslData = { message: "SSL scan data will render here" };
//   const historyData = { message: "History data will render here" };
//   const statsData = {
//     total_scans: 303,
//     vulnerable_targets: 133,
//     safe_targets: 170,
//   };

//   const dataMap = {
//     home: homeData,
//     recon: reconData,
//     fast: fastData,
//     deep: deepData,
//     web: webData,
//     ssl: sslData,
//     history: historyData,
//     stats: statsData,
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>🛡 Enterprise VAPT Dashboard</h1>

//       {/* ===== BUTTONS (ALL PRESENT) ===== */}
//       <div style={{ marginBottom: 20 }}>
//         {[
//           "home",
//           "recon",
//           "fast",
//           "deep",
//           "web",
//           "ssl",
//           "history",
//           "stats",
//         ].map((btn) => (
//           <button
//             key={btn}
//             onClick={() => setActive(btn)}
//             style={{
//               marginRight: 8,
//               padding: "6px 12px",
//               background: active === btn ? "#0b5ed7" : "#e0e0e0",
//               color: active === btn ? "#fff" : "#000",
//               border: "none",
//               borderRadius: 4,
//               cursor: "pointer",
//             }}
//           >
//             {btn.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       {/* ===== DATA RENDER ===== */}
//       <h2>{active.toUpperCase()} DATA</h2>
//       <RenderObject data={dataMap[active]} />
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import "./EmployeeList.css";

/* ================= API MAP ================= */

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

/* ================= SAFE HELPERS ================= */

const isObject = (v) =>
  v && typeof v === "object" && !Array.isArray(v);

/* ================= COMPONENT ================= */

export default function EmployeeList() {
  const [activeTab, setActiveTab] = useState("home");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState("demo.preview-workspace.com");

  /* ========== FETCH DATA ========== */
  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = () => {
    setLoading(true);
    setData(null);

    let url = apiMap[activeTab];

    if (!["home", "history", "stats"].includes(activeTab)) {
      url = `${url}?target=${encodeURIComponent(target)}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => setData({ error: err.message }))
      .finally(() => setLoading(false));
  };

  /* ================= COMMON UI BLOCKS ================= */

  const renderKeyValue = (obj) => {
    if (!isObject(obj)) return null;

    return Object.entries(obj).map(([k, v]) => (
      <p key={k}>
        <b>{k}:</b>{" "}
        {isObject(v) || Array.isArray(v)
          ? JSON.stringify(v, null, 2)
          : String(v)}
      </p>
    ));
  };

  /* ================= HOME ================= */

  const renderHome = () =>
    data && (
      <>
        <div className="card">
          <h3>🛠 Engine Info</h3>
          <p><b>Engine:</b> {data.engine}</p>
          <p><b>Status:</b> {data.status}</p>
          <p><b>Message:</b> {data.message}</p>
        </div>

       <div className="card">
  <h3>📦 Available Modules</h3>

  <div className="module-grid">
    {Array.isArray(data.modules) &&
      data.modules.map((m, i) => (
        <div key={i} className="module-item">
          {m}
        </div>
      ))}
  </div>
</div>


        <div className="card">
          <h3>🔗 Endpoints</h3>
          {renderKeyValue(data.available_endpoints)}
        </div>
      </>
    );

  /* ================= RECON ================= */

  const renderRecon = () =>
    data && (
      <>
        <div className="card">
          <h3>🔍 Recon Summary</h3>
          <p><b>Scan ID:</b> {data.scan_id}</p>
          <p><b>Module: </b>{data.module}</p>
          <p><b>Time:</b> {data.scan_time}</p>
          <p><b>Target/Input:</b> {data.input}</p>
          <p><b>IP:</b> {data.resolved_ip}</p>
          <p><b>Reverse DNS:</b> {data.reverse_dns}</p>
          <p><b>Asset:</b> {data.asset_type}</p>
          <p><b>Cloud Ready:</b> {String(data.cloud_ready)}</p>
        </div>

        <div className="card">
          <h3>📝 Note</h3>
          <p>{data.note}</p>
        </div>
      </>
    );

  /* ================= FAST / DEEP / WEB / SSL ================= */
    const renderScan = () =>
  data && (
    <>
      {/* ===== Scan Summary ===== */}
      <div className="card">
        <h3>📄 Scan Summary</h3>
        {renderKeyValue({
          scan_id: data.scan_id,
          scan_time: data.scan_time,
          scan_duration_seconds: data.scan_duration_seconds,
          engine: data.engine,
          mode: data.mode,
          input: data.input,
          resolved_ip: data.resolved_ip,
          verdict: data.verdict,
          security_grade: data.security_grade,
          risk_percentage: data.risk_percentage,
          attack_surface_score: data.attack_surface_score,
        })}
      </div>

      {/* ===== Attack Surface ===== */}
      {isObject(data.attack_surface) && (
        <div className="card">
          <h3>🎯 Attack Surface</h3>
          {renderKeyValue(data.attack_surface)}
        </div>
      )}

      {/* ===== Open Ports (EMPTY SAFE CASE ALSO SHOWN) ===== */}
      <div className="card">
        <h3>🚨 Open Ports</h3>

        {Array.isArray(data.open_ports) && data.open_ports.length > 0 ? (
          data.open_ports.map((p, i) => (
            <div key={i} className="sub-card">
              {renderKeyValue(p)}
            </div>
          ))
        ) : (
          <p>✅ No open ports detected</p>
        )}
      </div>

      {/* ===== Management Summary ===== */}
      {data.management_summary && (
        <div className="card">
          <h3>🧠 Management Summary</h3>
          <p>{data.management_summary}</p>
        </div>
      )}

      {/* ===== Note ===== */}
      {data.note && (
        <div className="card">
          <h3>📌 Note</h3>
          <p>{data.note}</p>
        </div>
      )}
    </>
  );

  /* ================= STATS ================= */

  const renderStats = () =>
    data && (
      <div className="card">
        <h3>📊 Platform Stats</h3>
        {renderKeyValue(data)}
      </div>
    );

      /* ================= HISTORY ================= */

  const renderHistory = () => {
    if (!Array.isArray(data)) return null;

    return (
      <>
        {data.map((item, idx) => (
          <div className="card" key={item.scan_id || idx}>
            <h3>
              🕒 Scan History{" "}
              {item.mode
                ? `(${item.mode})`
                : item.module
                ? `(${item.module})`
                : ""}
            </h3>

            {renderKeyValue({
              scan_id: item.scan_id,
              scan_time: item.scan_time,
              scan_duration_seconds: item.scan_duration_seconds,
              engine: item.engine,
              mode: item.mode,
              module: item.module,
              input: item.input,
              resolved_ip: item.resolved_ip,
              reverse_dns: item.reverse_dns,
              asset_type: item.asset_type,
              cloud_ready: item.cloud_ready,
              verdict: item.verdict,
              security_grade: item.security_grade,
              risk_percentage: item.risk_percentage,
              attack_surface_score: item.attack_surface_score,
            })}

            {isObject(item.attack_surface) && (
              <div className="sub-card">
                <h4>🎯 Attack Surface</h4>
                {renderKeyValue(item.attack_surface)}
              </div>
            )}

            {Array.isArray(item.open_ports) &&
              item.open_ports.length > 0 && (
                <div className="card">
                  <h4>🚨 Open Ports</h4>
                  {item.open_ports.map((p, i) => (
                    <div key={i} className="sub-card">
                      {renderKeyValue(p)}
                    </div>
                  ))}
                </div>
              )}

            {item.management_summary && (
              <div className="sub-card">
                <h4>🧠 Management Summary</h4>
                <p>{item.management_summary}</p>
              </div>
            )}

            {item.note && (
              <div className="sub-card">
                <h4>📌 Note</h4>
                <p>{item.note}</p>
              </div>
            )}
          </div>
        ))}
      </>
    );
  };


  /* ================= UI ================= */

  return (
    <div className="container">
      <h2>--Enterprise VAPT Dashboard--</h2>

      {/* Target */}
      <div className="center">
        <input value={target} onChange={(e) => setTarget(e.target.value)} />
        <button onClick={fetchData}>Scan</button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {Object.keys(apiMap).map((tab) => (
         <button
  onClick={() => setActiveTab(tab)}
  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
>
  {tab.toUpperCase()}
</button>

        ))}
      </div>

      {loading && <p>Loading...</p>}
      {data?.error && <p className="error">{data.error}</p>}

      {/* Render */}
      {activeTab === "home" && renderHome()}
      {activeTab === "recon" && renderRecon()}
      {["fast", "deep", "web", "ssl"].includes(activeTab) && renderScan()}
      {activeTab === "stats" && renderStats()}
     {activeTab === "history" && renderHistory()}

    </div>
  );
}
