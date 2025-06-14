import React from 'react';
import './BarTools.css';
import barToolsData from './barToolsData'; // adjust path as needed

const BarTools = () => {
  return (
    <section className="bar-tools-section">
      <h2 className="bar-tools-title">Εργαλεία Bar</h2>
      <div className="bar-tools-list">
        {barToolsData.map((tool, index) => (
          <div key={index} className="bar-tool-item">
            <img src={tool.image} alt={tool.name} className="bar-tool-image" />
            <div className="bar-tool-text">
              <h3 className="bar-tool-name">{tool.name}</h3>
              <p className="bar-tool-description">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BarTools;
