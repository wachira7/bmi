import React, { useContext } from 'react';
import { BMIContext } from './BMIContext';

function BMIForm() {
  const { weight, setWeight, height, setHeight, calculateBMI } = useContext(BMIContext);

  //function that handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI(); //Calls the calculateBMI function from the context to calculate and update the BMI.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight((e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight((e.target.value))}
          />
        </label>
      </div>
      <button type="submit">Calculate BMI</button>
    </form>
  );
}

export default BMIForm;
