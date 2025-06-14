import React from 'react';
import './CommunicationCodes.css';

const codes = [
  { code: '50(X)', meaning: "Δώσ'μου μπουκάλι Χ" },
  { code: '68', meaning: 'Προϊόν ξανά διαθέσιμο' },
  { code: '85', meaning: 'Προϊόν τελειώνει' },
  { code: '86', meaning: 'Προϊόν τελείωσε' },
  { code: '100', meaning: 'Πρέπει να καθαρίσω το station (έκτακτο)' },
  { code: '200', meaning: 'Νέος πελάτης χρειάζεται προσοχή' },
  { code: '250', meaning: 'Πελάτης θέλει αναπτήρα' },
  { code: '300', meaning: 'Υπάρχων πελάτης χρειάζεται προσοχή' },
  { code: '400', meaning: 'Πολύ δουλειά – Χρειάζομαι βοήθεια' },
  { code: '501', meaning: 'Χρειάζομαι μάνατζερ' },
];

const breakCodes = [
  { code: '600', meaning: 'πάω για διάλειμμα' },
  { code: '601', meaning: 'πάω τουαλέτα για νούμερο 1' },
  { code: '602', meaning: 'πάω τουαλέτα για νούμερο 2' },
  { code: '603', meaning: 'πάω τουαλέτα και θα μου πάρει λίγη ώρα' },
  { code: '650', meaning: 'πάω για διάλειμμα τσιγάρου' },
];

const specialCodes = [
  { code: '700', meaning: '..1 ..2 ..3 ωραίος/α πελάτης/ισσα (μετά από ..1, ..2, ..3 ποτά)' },
  { code: '800', meaning: 'Από σέρβις σε bartender: νέα παραγγελία χρειάζεται προώθηση' },
  { code: '900', meaning: 'Έτοιμη παραγγελία που δεν πρέπει να περιμένει άλλο' },
  { code: 'On the Fly', meaning: 'Κάτι πρέπει να γίνει άμεσα (π.χ. 900 τραπέζι 84 On the fly)' },
  { code: 'Backs', meaning: 'Περνάς από πίσω – ειδοποίηση για αποφυγή ατυχημάτων' },
];

const CommunicationCodes = () => {
  return (
    <section className="codes-section">
      <h2 className="codes-title">Κωδικοί</h2>

      <div className="code-group">
        <h3 className="group-title">Λειτουργικοί Κωδικοί</h3>
        {codes.map((item, idx) => (
          <div key={idx} className="code-item">
            <span className="code-label">{item.code}</span>
            <span className="code-meaning">{item.meaning}</span>
          </div>
        ))}
      </div>

      <div className="code-group">
        <h3 className="group-title">Break / Τουαλέτα</h3>
        {breakCodes.map((item, idx) => (
          <div key={idx} className="code-item">
            <span className="code-label">{item.code}</span>
            <span className="code-meaning">{item.meaning}</span>
          </div>
        ))}
      </div>

      <div className="code-group">
        <h3 className="group-title">Ειδικά / Cool Κωδικάκια</h3>
        {specialCodes.map((item, idx) => (
          <div key={idx} className="code-item">
            <span className="code-label">{item.code}</span>
            <span className="code-meaning">{item.meaning}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunicationCodes;
