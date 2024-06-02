import React, { createContext, useState } from 'react';

const BMIContext = createContext();

function BMIProvider({ children }) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  return (
    <BMIContext.Provider value={{ weight, setWeight, height, setHeight, bmi, calculateBMI }}>
      {children}
    </BMIContext.Provider>
  );
}

export { BMIContext, BMIProvider };
