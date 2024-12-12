import { useEffect, useState } from "react";
import axios from "axios";
import "./ToolInput.scss";
import AssessmentResults from "../AssessmentResults/AssessmentResults";

const BASE_URL = import.meta.env.VITE_API_URL;

function ToolInput() {
  const [formState, setFormState] = useState({
    refrigerationSystem: "",
    coolantType: "",
    weightValue: "",
    unit: "",
  });

  //Store data here
  const [refrigerationSystems, setRefrigerationSystems] = useState([]);
  const [coolants, setCoolants] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/systems`);
        setRefrigerationSystems(response.data);
      } catch (error) {
        console.error("Error fetching systems:", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const fetchCoolants = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/coolants`);
        setCoolants(response.data);
      } catch (error) {
        console.error("Error fetching coolants:", error);
      }
    };

    fetchCoolants();
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
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form Submitted:", formState);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/results`,
        formState
      );
      if (response.status === 201) {
        const { data } = response; 
        setSubmittedData(data); 
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error fetching systems:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="tool-input-form">

        <div className="toolinput__container"> 
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
            {refrigerationSystems.map((system) => (
              <option key={system.id} value={system.system_type}>
                {system.system_type}
              </option>
            ))}
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
            {coolants.map((coolant, index) => (
              <option key={index} value={coolant.coolant_type}>
                {coolant.coolant_type}
              </option>
            ))}
          </select>
        </div>
        </div>

        <div className="toolinput__container"> 
        <div>
          <label>Weight of Coolant Purchased Annually:</label>
          <input
            type="number"
            id="weightValue"
            name="weightValue"
            value={formState.weightValue}
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
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* To conditionally render admin tab replace submitted && with "user?.role === "admin" &&"" */}
      {submitted && <AssessmentResults data={submittedData} />}
    </>
  );
}

export default ToolInput;
