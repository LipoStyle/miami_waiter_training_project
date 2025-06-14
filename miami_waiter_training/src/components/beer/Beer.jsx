import React from 'react';
import './Beer.css';

const beers = [
  // Βαρελίσιες Μπύρες
  {
    category: 'Βαρελίσιες Μπύρες',
    name: 'ΜΥΘΟΣ',
    availability: 'διαθέσιμο σε ποτήρι 300ml και 500ml',
    description: `Μακράν η πιο γνωστή ελληνική μπύρα παγκοσμίως. 
      Στην Ελλάδα την αποκαλούμε ξανθιά ή lager. H lager είναι μία βιομηχανοποιημένη 
      μέθοδος παρασκευής μπύρας ώστε να παραχθεί σε μεγάλη κλίμακα, με ομοιογένεια και 
      χαμηλό κόστος. Αυτή η διαδικασία απαιτεί ειδική μαγιά που ζυμώνει στον πάτο του βαρελιού 
      σε χαμηλή θερμοκρασία.`,
    image: '/images/beer/mythos.jpg'
  },
  {
    category: 'Βαρελίσιες Μπύρες',
    name: 'KAISER',
    availability: 'διαθέσιμο σε ποτήρι 300ml και 500ml',
    description: `Η Kaiser είναι τύπου Pilsner. Η βασική διαφορά από τη lager 
      είναι η χρήση λυκίσκων που δίνουν ένταση και βοηθούν στην αποστείρωση. 
      Η πρώτη Pilsner στον κόσμο (Pilsner Urquell) φτιάχτηκε στο Πλζεν της Τσεχίας, 
      και η Kaiser ακολουθεί αυτήν την παράδοση.`,
    image: '/images/beer/kaiser.jpg'
  },
  {
    category: 'Βαρελίσιες Μπύρες',
    name: 'GRIMBERGEN BLANCHE',
    availability: 'διαθέσιμο σε ποτήρι 300ml και 500ml',
    description: `Παρότι η Grimbergen παράγει πολλές ετικέτες, επιλέξαμε τη Blanche, τύπου Weiss (witbier). 
      Αντίθετα με τη lager ή την pilsner, εδώ έχουμε «ζεστή» ζύμωση· η μαγιά ανεβαίνει στον αφρό, 
      καθιστώντας την μπύρα θολή όταν παγώσει («λευκή μπύρα»).`,
    image: '/images/beer/grimbergen-blanche.jpg'
  },

  // Μπύρες Φιάλη
  {
    category: 'Μπύρες Φιάλη',
    name: 'VOREIA STOUT',
    availability: 'διαθέσιμο σε μπουκάλι 330ml',
    description: `Οι Stouts (μαζί με τις Porters) είναι ο πιο γνωστός τύπος μαύρης μπύρας παγκοσμίως. 
      Το χρώμα προέρχεται από καβουρδισμένο κριθάρι. 
      Η Siris MicroBrewery των Σερρών χρησιμοποιεί ελληνικό κριθάρι, με αποτέλεσμα πλούσια, 
      βελούδινη γεύση σοκολάτας και καφέ.`,
    image: '/images/beer/voreia-stout.jpg'
  },
  {
    category: 'Μπύρες Φιάλη',
    name: 'ODYSSEY RED RHAPSODY',
    availability: 'διαθέσιμο σε μπουκάλι 330ml',
    description: `Παράγεται από την ΕΖΑ στην Αταλάντη και είναι τύπου Amber Ale. 
      Οι Ales ζυμώνονται «ζεστά» (πάνω στο βαρέλι). 
      Το Amber αναφέρεται στο χρώμα (κεχριμπαρί), που εδώ επιτυγχάνεται με καραμελόχρωμα.`,
    image: '/images/beer/odyssey-red-rhapsody.jpg'
  },
  {
    category: 'Μπύρες Φιάλη',
    name: 'VOREIA I.P.A.',
    availability: 'διαθέσιμο σε μπουκάλι 330ml',
    description: `I.P.A. σημαίνει India Pale Ale: αφού ωριμάσει η μπύρα, προστίθενται λυκίσκοι 
      για να αντέξει το ταξίδι από τη Βρετανία προς την Ινδία. 
      Η Voreia I.P.A. είναι έντονα πικρή, υψηλό αλκοόλ, και με αρωματικούς Αμερικάνικους λυκίσκους 
      που δίνουν νότες grapefruit και πεύκου.`,
    image: '/images/beer/voreia-ipa.jpg'
  },
  {
    category: 'Μπύρες Φιάλη',
    name: 'SOMERSBY APPLE CIDER',
    availability: 'διαθέσιμο σε μπουκάλι 330ml',
    description: `Μηλίτης από τη Δανία. Το Somersby έχει κερδίσει παγκόσμια αναγνώριση χάρη σε βιολογικές 
      καλλιέργειες και στο «σύνθημα αισιοδοξίας». Είναι πολύ φρέσκος για αλκοολούχο ποτό, 
      αφού τα σάκχαρα προέρχονται από μήλα, όχι από σιτηρά.`,
    image: '/images/beer/somersby-apple-cider.jpg'
  }
];

const Beer = () => {
  // Ομαδοποίηση κατά κατηγορία (Βαρελίσιες & Φιάλη)
  const grouped = beers.reduce((acc, beer) => {
    if (!acc[beer.category]) acc[beer.category] = [];
    acc[beer.category].push(beer);
    return acc;
  }, {});

  return (
    <section className="beer-section">
      <h2 className="beer-main-title">Μπύρα</h2>

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="beer-category-block">
          <h3 className="beer-category-title">{category}</h3>
          <div className="beer-list">
            {items.map((beer, idx) => (
              <div key={idx} className="beer-card">
                <img
                  src={beer.image}
                  alt={beer.name}
                  className="beer-image"
                />
                <div className="beer-info">
                  <h4 className="beer-name">{beer.name}</h4>
                  <p className="beer-availability">{beer.availability}</p>
                  <p className="beer-description">{beer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Beer;
