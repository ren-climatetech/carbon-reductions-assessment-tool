import React from "react";
import "./AssessmentPage.scss";
import commercial from "../../assets/images/commercial.jpg";
import ToolInput from "../../components/ToolInput/ToolInput";

function AssessmentPage() {
  return (
    
    <div className="assessmentpage">

      <div className="assessmentpage__section assessment__section-services">
        <img
          className="assessmentpage__image"
          src={commercial}
          alt="background-cover-photo"
        />
        <div className="assessmentpage__overlay"></div>
        <div className="assessmentpage__container">
          <h1 className="assessmentpage__title">HVAC Assessment Tool</h1>
        </div>
      </div>

      <section>
        <ToolInput />
      </section>
      <section></section>
      <footer></footer>
    </div>
  );
}

export default AssessmentPage;
