import React from 'react';
import { BMIProvider } from './BMIContext';
import BMIForm from './BMIForm';
import BMICalculator from './BMICalculator';
import './App.css';


function App() {
  return (
    <BMIProvider>
      <div className="App">
        <h1>BMI Calculator</h1>
        <BMIForm />
        <BMICalculator />
      </div>
    </BMIProvider>
  );
}

export default App;
