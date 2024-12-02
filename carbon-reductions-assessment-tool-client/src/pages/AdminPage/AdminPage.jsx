import { useEffect, useState } from "react";

const AdminPage = () => {
  const [data, setData] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch("http://localhost:5002/api/results")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array to run only once when component mounts

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Emission Results</h2>
      <ul>
        <li>
          <span style={{ fontWeight: 600 }}>Refrigeration System:</span>{" "}
          {data.refrigerationSystem}
        </li>
        <li>
          <span style={{ fontWeight: 600 }}>Coolant Type:</span>{" "}
          {data.coolantType}
        </li>
        <li>
          <span style={{ fontWeight: 600 }}>Weight Value:</span>{" "}
          {data.weightValue} {data.unit}
        </li>
        <li>
          <span style={{ fontWeight: 600 }}>Weight in Metric Tons:</span>{" "}
          {data.weightInMetricTons}
        </li>
        <li>
          <span style={{ fontWeight: 600 }}>
            Estimated Annual Emissions (mTCO2e):
          </span>{" "}
          {data.co2Equivalent.toFixed(2)} mTCO2e
        </li>
        <li>
          <span style={{ fontWeight: 600 }}>GWP Limit Result:</span>{" "}
          {data.gwpLimitResult}
        </li>
        <li>
          <span style={{ fontWeight: 600 }}>Difference:</span> {data.difference}
        </li>
        <li>
          <span style={{ fontWeight: 600 }}>Carbon Credits:</span>{" "}
          {data.carboncredits}
        </li>
      </ul>
    </div>
  );
};

export default AdminPage;
