import React, { useContext } from 'react';
import { BMIContext } from './BMIContext';

function BMIDisplay() {
   //uses the useContext hook to consume the BMIContext.
  const { bmi } = useContext(BMIContext); // Destructures the bmi value from the context object

  return (
    <div>
      {bmi !== null ? <h3>Your BMI: {bmi}</h3> : <h3>Please enter your weight and height.</h3>} 
    </div>
  );
}

export default BMIDisplay;



//If bmi is null, it prompts the user to enter their weight and height.