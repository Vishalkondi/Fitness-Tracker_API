import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FitnessTracker = () => {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [heartRate, setHeartRate] = useState(0);

  // Function to fetch real-time fitness data
  const fetchFitnessData = async () => {
    try {
      const response = await axios.get('https://api.example.com/fitness-data'); // Replace with real API URL
      setSteps(response.data.steps);
      setCalories(response.data.calories);
      setHeartRate(response.data.heartRate);
    } catch (error) {
      console.error('Error fetching fitness data:', error);
    }
  };

  // Fetch data every 30 seconds (real-time update)
  useEffect(() => {
    const interval = setInterval(fetchFitnessData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fitness-tracker">
      <h2>Fitness Tracker</h2>
      <div className="data">
        <p>Steps: {steps}</p>
        <p>Calories Burned: {calories}</p>
        <p>Heart Rate: {heartRate} BPM</p>
      </div>
      <button onClick={fetchFitnessData}>Fetch Latest Data</button>
    </div>
  );
};

export default FitnessTracker;
