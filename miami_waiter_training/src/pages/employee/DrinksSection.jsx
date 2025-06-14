// src/pages/Employee/DrinksSection.jsx
import React from 'react';

// Import each of your drink‐related components
import BarTools from '../../components/bartools/BarTools';
import Beer from '../../components/beer/Beer';
import Wine from '../../components/wine/Wine';
import CocktailRecipes from '../../components/cocktailrecipes/CocktailRecipes';
import Coffee from '../../components/coffee/Coffee';
import DrinkCategories from '../../components/drinkcategories/DrinkCategories';

export default function DrinksSection() {
  return (
    <div>
      <h2>Drinks Training</h2>

      <section>
        <h3>1. Bar Tools</h3>
        <BarTools />
      </section>

      <section>
        <h3>2. Beer Knowledge</h3>
        <Beer />
      </section>

      <section>
        <h3>3. Wine Knowledge</h3>
        <Wine />
      </section>

      <section>
        <h3>4. Cocktail Recipes</h3>
        <CocktailRecipes />
      </section>

      <section>
        <h3>5. Coffee Basics</h3>
        <Coffee />
      </section>

      <section>
        <h3>6. Drink Categories (Overview)</h3>
        <DrinkCategories />
      </section>
    </div>
  );
}
