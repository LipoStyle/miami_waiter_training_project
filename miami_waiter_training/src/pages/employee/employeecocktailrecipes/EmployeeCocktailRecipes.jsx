import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeCocktailRecipes.css';

import { API_BASE_URL } from '../../../config';

export default function EmployeeCocktailRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) throw new Error('No token found. Please log in again.');

      const response = await fetch(`${API_BASE_URL}/api/v1/cocktail_recipes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch cocktail recipes');

      const data = await response.json();
      setRecipes(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching recipes:', err);
      setError(err.message || 'Error loading recipes');
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="employee-cocktail-recipes-page">Loading recipes...</div>;
  }

  if (error) {
    return <div className="employee-cocktail-recipes-page">{error}</div>;
  }

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-cocktail-recipes-page">
      <h1>Cocktail Recipes</h1>
      <p>Discover our cocktail recipes below. You can view any recipe in detail.</p>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search recipes by name..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="employee-cocktail-recipes-card-section">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="employee-cocktail-recipe-card">
              {recipe.image ? (
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="employee-cocktail-recipe-image"
                />
              ) : (
                <div className="employee-cocktail-recipe-placeholder">No Image</div>
              )}

              <h3>{recipe.name}</h3>
              <p>Category: {recipe.category}</p>
              <p>Glassware: {recipe.glassware}</p>
              <p>ABV: {recipe.abv ? `${recipe.abv}%` : 'N/A'}</p>

              <div className="employee-cocktail-recipe-tags">
                {recipe.cocktail_tags.map((tag) => (
                  <span key={tag.id} className="employee-cocktail-recipe-tag">
                    {tag.tag_name}
                  </span>
                ))}
              </div>

              <div className="employee-cocktail-recipe-card-actions">
                <button onClick={() => navigate(`/employee/cocktail-recipes/${recipe.id}/view`)}>
                  View
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ padding: '1rem', fontStyle: 'italic', color: '#6b7280' }}>
            No matching recipes found.
          </p>
        )}
      </div>
    </div>
  );
}
