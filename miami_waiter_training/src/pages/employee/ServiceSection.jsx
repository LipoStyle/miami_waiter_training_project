// src/pages/Employee/ServiceSection.jsx
import React from 'react';

import CommunicationCodes from '../../components/communicationcodes/CommunicationCodes';
import ServiceSteps from '../../components/servicesteps/ServiceSteps';
import ThreePoints from '../../components/threepoints/ThreePoints';
import SetupClosing from '../../components/setupclosing/SetupClosing';

export default function ServiceSection() {
  return (
    <div>
      <h2>Service Training</h2>

      <section>
        <h3>1. Communication Codes</h3>
        <CommunicationCodes />
      </section>

      <section>
        <h3>2. Service Steps</h3>
        <ServiceSteps />
      </section>

      <section>
        <h3>3. The Three Points Technique</h3>
        <ThreePoints />
      </section>

      <section>
        <h3>4. Setup & Closing Procedures</h3>
        <SetupClosing />
      </section>
    </div>
  );
}
