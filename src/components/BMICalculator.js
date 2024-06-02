import React, { useContext } from 'react';
import { BMIContext } from './BMIContext';

function BMICalculator() {
  const { bmi } = useContext(BMIContext);

  return (
    <div>
      {bmi !== null ? <h3>Your BMI: {bmi}</h3> : <h3>Please enter your weight and height.</h3>}
    </div>
  );
}

export default BMICalculator;
