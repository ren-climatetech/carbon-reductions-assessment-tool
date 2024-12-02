import "./AssessmentResults.scss";
import React from "react";

function AssessmentResults({ data }) {
  if (!data) {
    return (
      <div className="assessment__content">
        <h2>No Assessment Data</h2>
        <p>Please complete the assessment to view results.</p>
      </div>
    );
  }

  const { restricted, co2Equivalent, carboncredits } = data;

  const displayCarbonCredits =
    carboncredits < 0
      ? "Not eligible for carbon credits under Canada’s Greenhouse Gas (GHG) Offset Credit System. The GWP of your current is already below the provincial or federal allowable limit."
      : `$${carboncredits.toFixed(2).toLocaleString()}`;

  if (restricted === "No") {
    return (
      <div className="assessment__content">
        <h2>Your Assessment</h2>
        <p>
          Based on the information provided, here is our assessment of your
          coolant restriction, current carbon emissions, and projected carbon
          credits.
        </p>
        <ul>
          <li>
            <span style={{ fontWeight: 600 }}>
              Coolant Under Federal Restriction:
            </span>{" "}
            {restricted}
          </li>
          <li>
            <span style={{ fontWeight: 600 }}>
              Estimated Annual Emissions:
            </span>{" "}
            {co2Equivalent ? `${co2Equivalent.toFixed(2)} mTCO2e` : "N/A"}
          </li>
          <li>
            <span style={{ fontWeight: 600 }}>Carbon Credits:</span>{" "}
            {displayCarbonCredits}
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="assessment__content">
        <h2>Not eligible</h2>
        <p>
          You are not eligible for this assessment because the coolant used is
          restricted or being phased out.
        </p>
      </div>
    );
  }
}

export default AssessmentResults;
