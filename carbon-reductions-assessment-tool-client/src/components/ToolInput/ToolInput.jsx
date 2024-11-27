import { useEffect, useState } from "react";
import axios from "axios";
import "./ToolInput.scss";
import ArrowIcon from "../../assets/icons/arrow_drop_down-24px.svg";

function ToolInput() {
  const [formState, setFormState] = useState({
    refrigerationSystem: "",
    coolantType: "",
    customValue: "",
    unit: "",
  });

  //Store data here
  const [refrigerationSystems, setRefrigerationSystems] = useState([]);
  const [submitted, setSubmitted] = useState(false); 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/systems"); // "/user-data" is the API endpoint
        setRefrigerationSystems(response.data); 
      } catch (error) {
        console.error("Error fetching systems:", error);
      }
    };

    getData ();
  }, []); 

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form Submitted:", formState);
    alert(
      `System: ${formState.refrigerationSystem}\nCoolant: ${formState.coolantType}\nCustom Value: ${formState.customValue}\nUnit: ${formState.unit}`
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="tool-input-form">
        <label>Refrigeration System:</label>
        <div className="dropdown-container">
          <select
            id="refrigerationSystem"
            name="refrigerationSystem"
            value={formState.refrigerationSystem}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a system
            </option>
            {/* {refrigerationSystems.map((systems) => (
              <option key={systems.id} value={systems.id}>
                {systems.system_type}
              </option>
            ))} */}
          </select>
          
        </div>

        <div className="dropdown-container">
        <label>Refrigerant Coolant Type:</label>
        <select
          id="coolantType"
          name="coolantType"
          value={formState.coolantType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a coolant
          </option>
          <option value="coolantA">Coolant A</option>
          <option value="coolantB">Coolant B</option>
          <option value="coolantC">Coolant C</option>
        </select>
        </div>

<div >
        <label>Weight of Coolant Purchased Annually:</label>
        <input
          type="number"
          id="customValue"
          name="customValue"
          value={formState.customValue}
          onChange={handleChange}
          placeholder="Enter value here in kg or lbs"
          required
           min="0"
           step="0.01"
        />
        </div>


        <label>Select Unit of Measurement:</label>

        <div className="toolinput__unit">
       <div className="toolinput__unit-container">
        <input
          type="radio"
          id="kg"
          name="unit"
          value="kg"
          checked={formState.unit === "kg"}
          onChange={handleChange}
          required
        />
        <label>Kilograms (kg)</label>
        </div>
      
      <div className="toolinput__unit-container">
        <input
          type="radio"
          id="lbs"
          name="unit"
          value="lbs"
          checked={formState.unit === "lbs"}
          onChange={handleChange}
        />
        <label>Pounds (lbs)</label>
        </div>
        </div>

        <button type="submit">Submit</button>
      
      </form>

 {/* To conditionally render admin tab replace submitted && with "user?.role === "admin" &&"" */}
      {submitted && (
        <div className="assessment-content">
          <h2>Your Assessment</h2>
          <p>
            Based on the information provided, here is our estimate of your emissions, eligibility, and projected carbon credits.
          </p>
        </div>
      )}
    </>
  );
}

export default ToolInput;
