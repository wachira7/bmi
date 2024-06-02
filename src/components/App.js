import React from 'react';
import { BMIProvider } from './BMIContext';
import BMIForm from './BMIForm';
import BMIDisplay from './BMIDisplay';
import './App.css';


function App() {
  return (
    <BMIProvider>
      <div className="App">
        <h1>BMI Calculator</h1>
        <BMIForm />
        <BMIDisplay /> 
      </div>
    </BMIProvider>
  );
}

export default App;






//BMIProvider: Wraps all child components, making the context values and functions available to BMIForm and BMIDisplay.
//BMIForm: Renders the form component for user input.Allows users to input their weight and height.
//BMIDisplay: Renders the component that displays the calculated BMI.Shows the calculated BMI based on the user input
