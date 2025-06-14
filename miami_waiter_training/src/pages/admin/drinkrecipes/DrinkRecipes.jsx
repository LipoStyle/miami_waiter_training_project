import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DrinkRecipes.css';
import { toast } from 'react-toastify';

import { API_BASE_URL } from '../../../config';

export default function DrinkRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deletingRecipeId, setDeletingRecipeId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/cocktail_recipes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cocktail recipes');
      }

      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleView = (id) => {
    navigate(`/admin/drink-recipes/${id}/view`);
  };

  const handleEdit = (id) => {
    navigate(`/admin/drink-recipes/${id}/edit`);
  };

  const handleDelete = async (id) => {
    try {
      setDeletingRecipeId(id);

      const response = await fetch(`${API_BASE_URL}/api/v1/cocktail_recipes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete cocktail recipe');
      }

      toast.success('Cocktail recipe deleted successfully!');

      setTimeout(() => {
        setDeletingRecipeId(null);
        fetchRecipes();
      }, 500);
    } catch (error) {
      console.error('Error deleting cocktail recipe:', error);
      toast.error('Error deleting cocktail recipe');
      setDeletingRecipeId(null);
    }
  };

  // Filter recipes by name
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="drink-recipes-page">
      <h1>Drink Recipes</h1>
      <p>Manage your drink recipes below. You can create new recipes and view existing ones.</p>

      <button
        className="create-drink-recipe-button"
        onClick={() => navigate('/admin/drink-recipes/create')}
      >
        Create Cocktail Recipe
      </button>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search recipes by name..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Recipes list */}
      <div className="drink-recipes-card-section">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className={`drink-recipe-card ${deletingRecipeId === recipe.id ? 'deleting' : ''}`}
            >
              {recipe.image ? (
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="drink-recipe-image"
                />
              ) : (
                <div className="drink-recipe-placeholder">No Image</div>
              )}

              <h3>{recipe.name}</h3>
              <p>Category: {recipe.category}</p>
              <p>Glassware: {recipe.glassware}</p>
              <p>ABV: {recipe.abv ? `${recipe.abv}%` : 'N/A'}</p>

              <div className="drink-recipe-tags">
                {(recipe.cocktail_tags || []).map((tag) => (
                  <span key={tag.id} className="drink-recipe-tag">
                    {tag.tag_name}
                  </span>
                ))}
              </div>

              <div className="drink-recipe-card-actions">
                <button onClick={() => handleView(recipe.id)}>View</button>
                <button onClick={() => handleEdit(recipe.id)}>Edit</button>
                <button onClick={() => handleDelete(recipe.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ padding: '1rem', fontStyle: 'italic', color: '#6b7280' }}>
            No recipes found.
          </p>
        )}
      </div>
    </div>
  );
}
