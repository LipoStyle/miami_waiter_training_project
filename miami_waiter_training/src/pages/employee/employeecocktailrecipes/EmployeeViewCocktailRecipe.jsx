import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EmployeeViewCocktailRecipe.css';

import { API_BASE_URL } from '../../../config';

export default function EmployeeViewCocktailRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  const fetchRecipe = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) throw new Error('No token found. Please log in again.');

      const response = await fetch(`${API_BASE_URL}/api/v1/cocktail_recipes/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch recipe');

      const data = await response.json();
      setRecipe(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching recipe:', err);
      setError(err.message || 'Error loading recipe');
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="employee-view-recipe-page">Loading recipe...</div>;
  }

  if (error) {
    return <div className="employee-view-recipe-page">{error}</div>;
  }

  return (
    <div className="employee-view-recipe-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>{recipe.name}</h1>

      {recipe.image ? (
        <img src={recipe.image} alt={recipe.name} className="recipe-main-image" />
      ) : (
        <div className="recipe-image-placeholder">No Image</div>
      )}

      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Glassware:</strong> {recipe.glassware}</p>
      <p><strong>Garnish:</strong> {recipe.garnish}</p>
      <p><strong>Ice:</strong> {recipe.ice}</p>
      <p><strong>ABV:</strong> {recipe.abv ? `${recipe.abv}%` : 'N/A'}</p>

      <hr />

      <h2>Ingredients</h2>
      <ul>
        {recipe.cocktail_ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.quantity} {ingredient.name}
            {ingredient.preparation_notes && ` (${ingredient.preparation_notes})`}
          </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol>
        {recipe.cocktail_instructions.map((instruction) => (
          <li key={instruction.id}>{instruction.description}</li>
        ))}
      </ol>

      <h2>Tools Required</h2>
      <ul>
        {recipe.cocktail_tools.map((tool) => (
          <li key={tool.id}>{tool.tool_name}</li>
        ))}
      </ul>

      {recipe.story && (
        <>
          <h2>Story</h2>
          <p>{recipe.story}</p>
        </>
      )}

      {recipe.bartender_tips && (
        <>
          <h2>Bartender Tips</h2>
          <p>{recipe.bartender_tips}</p>
        </>
      )}

      <h2>Tags</h2>
      <div className="recipe-tags">
        {recipe.cocktail_tags.map((tag) => (
          <span key={tag.id} className="recipe-tag">
            {tag.tag_name}
          </span>
        ))}
      </div>
    </div>
  );
}
