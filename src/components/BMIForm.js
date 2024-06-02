import React, { useContext } from 'react';
import { BMIContext } from './BMIContext';

function BMIForm() {
  const { weight, setWeight, height, setHeight, calculateBMI } = useContext(BMIContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </label>
      </div>
      <button type="submit">Calculate BMI</button>
    </form>
  );
}

export default BMIForm;
