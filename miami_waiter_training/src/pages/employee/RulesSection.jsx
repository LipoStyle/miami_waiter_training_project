// src/pages/Employee/RulesSection.jsx
import React from 'react';

import Rules from '../../components/rules/Rules';
import RulesPart2 from '../../components/rulespart2/RulesPart2';

export default function RulesSection() {
  return (
    <div>
      <h2>Rules & Regulations</h2>

      <section>
        <h3>Restaurant Rules (Basic)</h3>
        <Rules />
      </section>

      <section>
        <h3>Restaurant Rules (Advanced / Part 2)</h3>
        <RulesPart2 />
      </section>
    </div>
  );
}
