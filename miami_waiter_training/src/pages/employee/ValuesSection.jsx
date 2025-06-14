// src/pages/Employee/ValuesSection.jsx
import React from 'react';

import Values from '../../components/values/Values';
import Techniques from '../../components/techniques/Techniques';
import Place from '../../components/place/Place';

export default function ValuesSection() {
  return (
    <div>
      <h2>Values & Additional Techniques</h2>

      <section>
        <h3>1. Company Values</h3>
        <Values />
      </section>

      <section>
        <h3>2. Service Techniques</h3>
        <Techniques />
      </section>

      <section>
        <h3>3. Table / Place Setup</h3>
        <Place />
      </section>
    </div>
  );
}
