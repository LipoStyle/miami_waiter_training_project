import React from 'react';
import './CocktailRecipes.css';

const recipes = [
  {
    name: 'VODKA MARTINI',
    ingredients: [
      'Wet = 15ml Carpano Dry',
      'Dry = 5ml Carpano Dry',
      '50ml Smirnoff Vodka'
    ],
    glass: 'Coupe',
    garnish: 'Olives or Lemon Twist',
    method: 'Stirred'
  },
  {
    name: 'GIN MARTINI',
    ingredients: [
      'Wet = 15ml Carpano Dry',
      'Dry = 5ml Carpano Dry',
      '50ml Beefeater Gin'
    ],
    glass: 'Coupe',
    garnish: 'Olives or Lemon Twist',
    method: 'Stirred'
  },
  {
    name: 'NEGRONI',
    ingredients: [
      '25ml Beefeater Gin',
      '25ml Antica Formula',
      '25ml Campari'
    ],
    glass: 'Libbey Timeless',
    garnish: 'Orange Twist',
    method: 'Build & Stir στο Libbey Timeless'
  },
  {
    name: 'OLD FASHIONED',
    ingredients: [
      '60ml ###Spirit',
      '2 κουτ. γλυκού μαύρη ζάχαρη',
      '2 dash Angostura / Xocolatl Mole / Transatlantic Bitters'
    ],
    glass: 'Libbey Timeless',
    garnish: 'Orange Twist or Cherry',
    method: 'Muddle bitters και ζάχαρη, Stirred'
  },
  {
    name: 'SOUR',
    ingredients: [
      '40ml ### Spirit',
      '20ml Λεμόνι',
      '20ml Simple Syrup',
      '(ασπράδι αυγού)',
      '2 dash Angostura / Boston Bittahs'
    ],
    glass: 'Coupe / Libbey Timeless (αναλόγως το spirit)',
    garnish: 'Angostura dash',
    method: 'Shake, διπλό Strain (μονό χωρίς ασπράδι)'
  },
  {
    name: 'MOSCOW MULE',
    ingredients: [
      '40ml Smirnoff',
      '20ml χυμός Λάιμ',
      '2 dash Angostura',
      'Source Ginger beer',
      'Μισό λάιμ, ποτισμένο με O.P. και καμμένο'
    ],
    glass: 'Verde Julep Cup',
    garnish: 'Burning Lime',
    method: 'Shake, μονό Strain, top up με Ginger beer'
  },
  {
    name: 'DAIQUIRI',
    ingredients: [
      '50ml Bacardi Carta Blanca',
      '10ml Rich Syrup',
      '20ml Λάιμ'
    ],
    glass: 'Coupe',
    garnish: '—',
    method: 'Shake, μονό Strain'
  },
  {
    name: 'MARGARITA',
    ingredients: [
      '40ml Jose Cuervo Tradicional (κίτρινη)',
      '20ml Cointreau (Triple Sec)',
      '20ml Λάιμ',
      '5ml Agave / Μέλι / Rich Syrup',
      'μισή πρέζα αλάτι'
    ],
    glass: 'Coupe',
    garnish: 'Αλατισμένο Στεφάνι',
    method: 'Shake, μονό Strain'
  },
  {
    name: 'CAIPIRINHA',
    ingredients: [
      '50ml Pitu Cachaca',
      '1/2 Λάιμ κομμένο στα 4',
      '15ml Simple Syrup'
    ],
    glass: 'Libbey Timeless',
    garnish: '—',
    method: 'Muddle λάιμ και ζάχαρη, Shake με το Libbey Timeless'
  },
  {
    name: 'MAI TAI',
    ingredients: [
      '40ml Havanna Anejo (μαύρη)',
      '15ml Cointreau (Triple Sec)',
      '7.5ml Orgeat MONIN',
      '7.5ml Simple Syrup',
      '20ml Λάιμ'
    ],
    glass: 'Verde Julep Glass',
    garnish: 'Μέντα και Λάιμ',
    method: 'Build, Churn με τρίμμα μέσα στο Verde Julep Glass'
  },
  {
    name: 'DARK & STORMY',
    ingredients: [
      '50ml Havanna Anejo (μαύρη)',
      '20ml Λάιμ',
      '10ml Rich Syrup',
      '2 dash Angostura / Boston Bittahs',
      'Source Ginger beer'
    ],
    glass: 'Highball',
    garnish: 'Λάιμ καρφωτό',
    method: 'Build με χοντρό πάγο μέσα στο Highball και καλαμάκι'
  },
  {
    name: 'MOJITO',
    ingredients: [
      '50ml Bacardi Carta Blanca',
      '10ml Rich Syrup',
      '20ml Λάιμ',
      '~10 φύλλα μέντας',
      'Σόδα'
    ],
    glass: 'Highball',
    garnish: 'Μέντα',
    method: 'Build, Churn με τρίμμα μέσα στο Highball και καλαμάκι'
  },
  {
    name: 'MINT JULEP',
    ingredients: [
      '60ml Jim Beam',
      '20ml Simple Syrup',
      '~10 φύλλα μέντας',
      '2 dash Angostura / Transatlantic'
    ],
    glass: 'Verde Julep Glass',
    garnish: 'Μέντα και κολλημένη πετσέτα',
    method: 'Build, Churn με τρίμμα μέσα στο Verde Julep Glass και καλαμάκι'
  }
];

const CocktailRecipes = () => {
  return (
    <section className="recipes-section">
      <h2 className="recipes-title">Συνταγές Κοκτέιλ</h2>
      <div className="recipes-list">
        {recipes.map((cocktail, index) => (
          <div key={index} className="recipe-item">
            <h3 className="recipe-name">{cocktail.name}</h3>

            <div className="recipe-subsection">
              <span className="subheading">Υλικά:</span>
              <ul className="ingredients-list">
                {cocktail.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>

            <div className="recipe-subsection">
              <span className="subheading">Ποτήρι:</span>
              <span className="subinfo">{cocktail.glass}</span>
            </div>

            <div className="recipe-subsection">
              <span className="subheading">Γαρνιτούρα:</span>
              <span className="subinfo">{cocktail.garnish}</span>
            </div>

            <div className="recipe-subsection">
              <span className="subheading">Μέθοδος:</span>
              <span className="subinfo">{cocktail.method}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CocktailRecipes;
