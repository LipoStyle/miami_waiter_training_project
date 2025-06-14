import React from 'react';
import './Rules.css'; // Optional if you want custom styling

const rules = [
  'Εκτιμάμε και εμπιστευόμαστε τους πελάτες μας.',
  'Αγαπάμε και στηρίζουμε ο ένας τον άλλο.',
  'Χαμογελάμε εύκολα και συχνά.',
  'Κοιταζόμαστε στα μάτια. Κάνει τη διαφορά.',
  'Λέμε “ναι”. Εάν δε μπορούμε, προτείνουμε εναλλακτικές.',
  'Εάν κάτι πάει στραβά, δίνουμε τα πάντα για να το φτιάξουμε.',
  'Κάνουμε πάντα το σωστό ακόμα και όταν δεν κοιτάει κανείς.',
  'Ειδικά όταν δεν κοιτάει κανείς.',
];

const Rules = () => {
  return (
    <section className="rules-section">
      <h2 className="rules-title">Μερικοί Κανόνες</h2>
      <ol className="rules-list">
        {rules.map((rule, index) => (
          <li key={index} className="rule-item">
            {rule}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Rules;
