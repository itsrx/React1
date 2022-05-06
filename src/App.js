import React, { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(15);
  const [temperatureColour, setTemperatureColour] = useState("neutral");

  const increaseTemperature = () => {
    if (temperatureValue === 30) return;
    const newTemp = temperatureValue + 1;
    if (temperatureColour === 'neutral') {
      if (newTemp >= 15) {
        setTemperatureColour('hot');
      } else {
        setTemperatureColour('cold');
      }
    }
    if (newTemp >= 15) {
      setTemperatureColour('hot');
    }
    setTemperatureValue(temperatureValue + 1);
  }

  const decreaseTemperature = () => {
    if (temperatureValue === -30) return;
    const newTemp = temperatureValue - 1;
    if (temperatureColour === 'neutral') {
      if (newTemp < 15) {
        setTemperatureColour('hot');
      } else {
        setTemperatureColour('cold');
      }
    }
    if (newTemp < 15) {
      setTemperatureColour('cold');
    }
    setTemperatureValue(temperatureValue - 1);
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColour}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={()=> increaseTemperature()}>+</button>
        <button onClick={()=> decreaseTemperature()}>-</button>
      </div>
    </div>
  )
}

export default App;