import { useState } from "react";
import "./ToolInput.scss";
import ArrowIcon from "../../assets/icons/arrow_drop_down-24px.svg";

function ToolInput() {
  const [formState, setFormState] = useState({
    refrigerationSystem: "",
    coolantType: "",
    customValue: "",
    unit: "",
  });

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
            <option value="system1">System 1</option>
            <option value="system2">System 2</option>
            <option value="system3">System 3</option>
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
        <label>Coolant Purchased Annually:</label>
        <input
          type="number"
          id="customValue"
          name="customValue"
          value={formState.customValue}
          onChange={handleChange}
          placeholder="Enter value here"
          required
           min="0"
           step="0.01"
        />
        </div>


        <label>Unit of Measurement:</label>

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
          id="oz"
          name="unit"
          value="oz"
          checked={formState.unit === "oz"}
          onChange={handleChange}
        />
        <label>Ounces (oz)</label>
        </div>
        </div>

        <button type="submit">Submit</button>
      
      </form>
    </>
  );
}

export default ToolInput;
