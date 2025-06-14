import React from 'react';
import './Wine.css';

const wines = [
  // Λευκά (White)
  {
    category: 'Λευκά',
    name: 'ΈΡΩΧΟΣ ΛΕΥΚΌΣ',
    availability: 'διαθέσιμο σε 125ml, 175ml και Φιάλη 750ml',
    description:
      'Το “σπιτικό” λευκό του ΜΙΑΜΙ Lounge. Ένα blend από Ασύρτικο, Ροδίτη και Sauvignon Blanc από την οινοποιία Αργυρίου στον Πολύδροσο Παρνασσού. Ελαφρύ προς μέτριο σώμα, με λίγα εσπεριδοειδή και μειωμένη γλυκύτητα.',
    image: '/images/wine/eroxos-leykos.jpg'
  },
  {
    category: 'Λευκά',
    name: 'Chateau Julia - Chardonnay',
    availability: 'διαθέσιμο σε 125ml, 175ml και Φιάλη 750ml',
    description:
      'Τα Chardonnay είναι συνήθως βαριές ποικιλίες αλλά στην Ελλάδα (Καβάλα), καταφέρνουν να είναι πιο ελαφριά. Το Chateau Julia έχει “νεοκοσμίτικες” νότες όπως ανανάς.',
    image: '/images/wine/chateau-julia-chardonnay.jpg'
  },
  {
    category: 'Λευκά',
    name: 'Βιβλία Χώρα – Λευκός',
    availability: 'διαθέσιμο σε 125ml, 175ml και Φιάλη 750ml',
    description:
      'Ίσως το καλύτερο (και πιο προσιτό) κρασί της Ελλάδας. Βασίζεται κυρίως στο Sauvignon Blanc σε blend με Ασύρτικο, αποφεύγοντας τον “φθηνό” Ροδίτη. Το Sauvignon Blanc φέρνει αρώματα εσπεριδοειδών (μανταρίνι) και το Ασύρτικο δίνει όγκο και πέτρινα φρουτώδη στοιχεία (ροδάκινο).',
    image: '/images/wine/vivlia-xora-leykos.jpg'
  },
  // Ερυθρά (Red)
  {
    category: 'Κόκκινα',
    name: 'ΈΡΩΧΟΣ ΕΡΥΘΡΌΣ',
    availability: 'διαθέσιμο σε 125ml, 175ml και Φιάλη 750ml',
    description:
      'Το “σπιτικό” κόκκινο του ΜΙΑΜΙ Lounge. Blend με βάση το Μαυρούδι και συμπλήρωμα Merlot. Αρώματα από φρούτα του δάσους και νότες καπνού με πλούσια υφή και μέτρια οξύτητα.',
    image: '/images/wine/eroxos-erythros.jpg'
  },
  {
    category: 'Κόκκινα',
    name: 'Αμέθυστος – Ερυθρός',
    availability: 'διαθέσιμο σε 125ml, 175ml και Φιάλη 750ml',
    description:
      'Blend Cabernet Sauvignon 70%, Merlot 20% και Αγιωργίτικο 10%, παλαίωση 12 μήνες σε δρύινα βαρέλια. Η παλαίωση “ηρεμεί” τις τανίνες και δίνει γευστικές νότες βανίλιας.',
    image: '/images/wine/amethystos-erythros.jpg'
  },
  {
    category: 'Κόκκινα',
    name: 'Μαντείο',
    availability: 'διαθέσιμο σε 125ml, 175ml και Φιάλη 750ml',
    description:
      'Ηπιότερο σώμα από τον Αμέθυστο, με αρώματα σοκολάτας και καφέ χάρη στη χρήση Μαυρούδι (πάντα σε βάση Cabernet Sauvignon). Στη συνέχεια απολαύστε επίγευση ξινόμηλου.',
    image: '/images/wine/manteio.jpg'
  }
];

const Wine = () => {
  // Group wines by category
  const grouped = wines.reduce((acc, wine) => {
    if (!acc[wine.category]) acc[wine.category] = [];
    acc[wine.category].push(wine);
    return acc;
  }, {});

  return (
    <section className="wine-section">
      <h2 className="wine-main-title">Κρασί</h2>

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="wine-category-block">
          <h3 className="wine-category-title">{category}</h3>
          <div className="wine-list">
            {items.map((wine, idx) => (
              <div key={idx} className="wine-card">
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="wine-image"
                />
                <div className="wine-info">
                  <h4 className="wine-name">{wine.name}</h4>
                  <p className="wine-availability">{wine.availability}</p>
                  <p className="wine-description">{wine.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Wine;
