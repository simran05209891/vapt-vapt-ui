import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ApiScan() {
  const { type } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(`http://20.197.47.46/${type}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(setResult);
  }, [type]);

  return (
    <div style={{ padding: "30px" }}>
      <h2>{type.toUpperCase()} Scan</h2>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
