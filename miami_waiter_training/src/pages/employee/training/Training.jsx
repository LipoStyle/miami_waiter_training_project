import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Training.css';

export default function Training() {
  const navigate = useNavigate();

  const trainingItems = [
    { label: 'Bartools', path: '/employee/training/bartools' },
    { label: 'Beer', path: '/employee/training/beer' },
    { label: 'Cocktail Recipes', path: '/employee/training/cocktailrecipes' },
    { label: 'Coffee', path: '/employee/training/coffee' },
    { label: 'Communication Codes', path: '/employee/training/communicationcodes' },
    { label: 'Drink Categories', path: '/employee/training/drinkcategories' },
    { label: 'Place', path: '/employee/training/place' },
    { label: 'Rules Part 1', path: '/employee/training/rules' },
    { label: 'Rules Part 2', path: '/employee/training/rulespart2' },
    { label: 'Service Steps', path: '/employee/training/servicesteps' },
    { label: 'Setup Indigos', path: '/employee/training/setupclosing' },
    { label: 'Three Points', path: '/employee/training/threepoints' },
    { label: 'Values', path: '/employee/training/values' },
    { label: 'Wine', path: '/employee/training/wine' },
  ];

  return (
    <div className="training-page">
      <h1>Training</h1>
      <p>Select a topic to continue:</p>

      <div className="training-grid">
        {trainingItems.map((item, index) => (
          <div
            key={index}
            className="training-card"
            onClick={() => navigate(item.path)}
          >
            <h3>{item.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
