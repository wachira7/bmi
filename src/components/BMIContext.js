import React, { createContext, useState } from 'react';

const BMIContext = createContext(); //Creates a new context object called BMIContext. This context will be used to share state and functions related to BMI calculation across components.

function BMIProvider({ children }) { // children represents any nested components that will consume the context.
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2); //round off the value  to 2dp
      setBMI(bmiValue);
    }
  };

  return (
    <BMIContext.Provider value={{ weight, setWeight, height, setHeight, bmi, calculateBMI }}> {/* value object containing the state variables with their respective setter functions*/ }
      {children} {/* Renders the children components passed to the BMIProvider, allowing them to consume the context.*/}
    </BMIContext.Provider>
  );
}

export { BMIContext, BMIProvider }; //Exports the BMIContext and BMIProvider so they can be imported and used in other parts of the application.
