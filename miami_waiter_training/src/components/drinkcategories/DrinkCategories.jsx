import React from 'react';
import './DrinkCategories.css';

const drinkCategories = [
  {
    name: 'JULEPS',
    formula: 'ΑΠΟΣΤΑΓΜΑ – ΖΑΧΑΡΗ – ΜΕΝΤΑ – ΝΕΡΟ',
    description: 'Ίσως η πιο παλιά συνταγή ανεμειγμένου ποτού στον κόσμο, με την πρώτη αναγραφή να συναντάται το 1809.'
  },
  {
    name: 'SOURS',
    formula: 'ΑΠΟΣΤΑΓΜΑ – ΖΑΧΑΡΗ – ΛΕΜΟΝΙ – ΝΕΡΟ',
    description: 'Η χρήση του αυγού στα sour ξεκίνησε για να καλύπτει την γεύση από κακό αλκοόλ στην ποτοαπαγόρευση. Έχει φανατικούς υποστηρικτές μέχρι και σήμερα (εκτός από την Ασία).'
  },
  {
    name: "FIZZES",
    formula: 'ΑΠΟΣΤΑΓΜΑ – ΖΑΧΑΡΗ – ΛΕΜΟΝΙ – ΑΝΘΡΑΚΟΥΧΟ ΝΕΡΟ',
    description: 'Το Ramos Gin Fizz απαιτούσε 12 λεπτά χτύπημα – τόση ζήτηση που οι “shaker boys” έγιναν αξιοθέατο στη Νέα Ορλεάνη.'
  },
  {
    name: "MARTINIS",
    formula: 'ΑΠΟΣΤΑΓΜΑ – BERMOYT – ΝΕΡΟ',
    description: 'Αντιπαλότητα Noily Prat και Martini, Sola & Cia για την Αμερική. Έγινε γνωστό με τον James Bond και το Vesper Martini.'
  },
  {
    name: "FLIPS",
    formula: 'ΑΠΟΣΤΑΓΜΑ – ΖΑΧΑΡΗ – ΝΕΡΟ – ΟΛΟΚΛΗΡΟ ΑΥΓΟ',
    description: 'Το φρέσκο μοσχοκάρυδο κάλυπτε τα πάντα – ακόμα και χαλασμένο αυγό – βασικό εργαλείο των παλιών bartenders.'
  },
  {
    name: "COCKTAIL",
    formula: 'ΑΠΟΣΤΑΓΜΑ – ΖΑΧΑΡΗ – BITTER – ΝΕΡΟ',
    description: 'Ίσως πήρε το όνομα από την πρακτική των “cock-tailed” αλόγων. Ή από την αραίωση του ποτού από φτωχούς για να "μακρύνουν" τη γεύση.'
  },
  {
    name: "MULE",
    formula: 'ΑΠΟΣΤΑΓΜΑ – ΖΑΧΑΡΗ – ΛΕΜΟΝΙ – GINGER BEER',
    description: 'Γεννήθηκε από 3 αποτυχίες: Smirnoff, ginger beer, και μια χαλκοβιομηχανία. Έγινε γνωστό χάρη στην χάλκινη κούπα.'
  },
  {
    name: "PUNCH",
    formula: '1 – 2 – 3 – 4 – 5',
    description: 'Το ποίημα λέει: One for Sour, Two for Sweet, Three for Strong, Four for Weak and Five for Spice.'
  }
];

const DrinkCategories = () => {
  return (
    <section className="drink-categories-section">
      <h2 className="drink-categories-title">Κατηγορίες Ποτών</h2>
      <p className="drink-categories-intro">
        ¨Βλέπουμε τα ποτά όπως τα βλέπαμε πριν τα 1950's. Αυτό σημαίνει πως δεν κάνουμε απλώς κοκτέιλ αλλά
        μιξάρουμε ποτά. Και τα κοκτέιλ είναι μία κατηγορία μιξαρισμένων ποτών. Κατανοώντας αυτές της κατηγορίες θα
        αποκτήσεις μια νέα οπτική στην παρασκευή ποτών η οποία θα κάνει τα πάντα πολύ πιο εύκολα.”
      </p>

      <div className="drink-categories-list">
        {drinkCategories.map((category, idx) => (
          <div key={idx} className="drink-category-item">
            <h3 className="drink-category-name">{category.name}</h3>
            <p className="drink-category-formula">‘{category.formula}’</p>
            <p className="drink-category-description">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DrinkCategories;
