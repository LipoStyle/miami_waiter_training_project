import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewDrinkRecipe.css';
import { toast } from 'react-toastify';

import { API_BASE_URL } from '../../../config';

export default function ViewDrinkRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/cocktail_recipes/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cocktail recipe');
      }

      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.error('Error fetching cocktail recipe:', error);
      toast.error('Error fetching cocktail recipe');
    }
  };

  if (!recipe) {
    return <p>Loading cocktail recipe...</p>;
  }

  return (
    <div className="view-drink-recipe-page">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>

      <h1>{recipe.name}</h1>
      {recipe.image ? (
        <img src={recipe.image} alt={recipe.name} className="view-drink-recipe-image" />
      ) : (
        <div className="view-drink-recipe-placeholder">No Image</div>
      )}

      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Glassware:</strong> {recipe.glassware}</p>
      <p><strong>Garnish:</strong> {recipe.garnish}</p>
      <p><strong>Ice:</strong> {recipe.ice}</p>
      <p><strong>ABV:</strong> {recipe.abv ? `${recipe.abv}%` : 'N/A'}</p>

      <h2>Ingredients</h2>
      <ul>
        {(recipe.cocktail_ingredients || []).map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.quantity} {ingredient.name}
            {ingredient.preparation_notes && ` (${ingredient.preparation_notes})`}
          </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol>
        {(recipe.cocktail_instructions || []).map((instruction) => (
          <li key={instruction.id}>
            Step {instruction.step_number}: {instruction.description}
          </li>
        ))}
      </ol>

      <h2>Tools</h2>
      <ul>
        {(recipe.cocktail_tools || []).map((tool) => (
          <li key={tool.id}>{tool.tool_name}</li>
        ))}
      </ul>

      <h2>Tags</h2>
      <div className="view-drink-recipe-tags">
        {(recipe.cocktail_tags || []).map((tag) => (
          <span key={tag.id} className="view-drink-recipe-tag">
            {tag.tag_name}
          </span>
        ))}
      </div>

      <h2>Story</h2>
      <p>{recipe.story}</p>

      <h2>Bartender Tips</h2>
      <p>{recipe.bartender_tips}</p>
    </div>
  );
}
