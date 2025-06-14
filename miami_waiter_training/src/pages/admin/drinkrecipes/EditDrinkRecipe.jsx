import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CreateDrinkRecipe.css'; // reuse same styling!
import { toast } from 'react-toastify';

import { API_BASE_URL } from '../../../config';

export default function EditDrinkRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: '',
    image: '',
    category: '',
    glassware: '',
    garnish: '',
    ice: '',
    abv: '',
    story: '',
    bartender_tips: '',
    cocktail_ingredients: [],
    cocktail_instructions: [],
    cocktail_tools: [],
    cocktail_tags: [],
  });

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

      // Preload data into correct structure
      setRecipe({
        name: data.name || '',
        image: data.image || '',
        category: data.category || '',
        glassware: data.glassware || '',
        garnish: data.garnish || '',
        ice: data.ice || '',
        abv: data.abv || '',
        story: data.story || '',
        bartender_tips: data.bartender_tips || '',
        cocktail_ingredients: data.cocktail_ingredients || [],
        cocktail_instructions: data.cocktail_instructions || [],
        cocktail_tools: data.cocktail_tools || [],
        cocktail_tags: data.cocktail_tags || [],
      });
    } catch (error) {
      console.error('Error fetching cocktail recipe:', error);
      toast.error('Error fetching cocktail recipe');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (index, field, value) => {
    const updated = [...recipe.cocktail_ingredients];
    updated[index][field] = value;
    setRecipe({ ...recipe, cocktail_ingredients: updated });
  };

  const handleInstructionChange = (index, field, value) => {
    const updated = [...recipe.cocktail_instructions];
    updated[index][field] = value;
    setRecipe({ ...recipe, cocktail_instructions: updated });
  };

  const handleToolChange = (index, value) => {
    const updated = [...recipe.cocktail_tools];
    updated[index].tool_name = value;
    setRecipe({ ...recipe, cocktail_tools: updated });
  };

  const handleTagChange = (index, value) => {
    const updated = [...recipe.cocktail_tags];
    updated[index].tag_name = value;
    setRecipe({ ...recipe, cocktail_tags: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/cocktail_recipes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cocktail_recipe: {
            name: recipe.name,
            image: recipe.image,
            category: recipe.category,
            glassware: recipe.glassware,
            garnish: recipe.garnish,
            ice: recipe.ice,
            abv: recipe.abv,
            story: recipe.story,
            bartender_tips: recipe.bartender_tips,
            cocktail_ingredients_attributes: recipe.cocktail_ingredients,
            cocktail_instructions_attributes: recipe.cocktail_instructions,
            cocktail_tools_attributes: recipe.cocktail_tools,
            cocktail_tags_attributes: recipe.cocktail_tags,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update cocktail recipe');
      }

      toast.success('Cocktail recipe updated successfully!');
      navigate('/admin/drink-recipes');
    } catch (error) {
      console.error('Error updating cocktail recipe:', error);
      toast.error('Error updating cocktail recipe');
    }
  };

  return (
    <div className="create-drink-recipe-page">
      <h1>Edit Cocktail Recipe</h1>

      <form onSubmit={handleSubmit} className="create-drink-recipe-form">
        {/* Basic Info */}
        <h2>Basic Info</h2>
        <input type="text" name="name" placeholder="Name" value={recipe.name} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={recipe.image} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={recipe.category} onChange={handleChange} required />
        <input type="text" name="glassware" placeholder="Glassware" value={recipe.glassware} onChange={handleChange} required />
        <input type="text" name="garnish" placeholder="Garnish" value={recipe.garnish} onChange={handleChange} />
        <input type="text" name="ice" placeholder="Ice" value={recipe.ice} onChange={handleChange} />
        <input type="number" step="0.1" name="abv" placeholder="ABV (%)" value={recipe.abv} onChange={handleChange} />

        {/* Ingredients */}
        <h2>Ingredients</h2>
        {recipe.cocktail_ingredients.map((ingredient, index) => (
          <div key={ingredient.id || index} className="nested-item">
            <input
              type="text"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
            />
            <input
              type="text"
              placeholder="Preparation Notes"
              value={ingredient.preparation_notes}
              onChange={(e) => handleIngredientChange(index, 'preparation_notes', e.target.value)}
            />
          </div>
        ))}

        {/* Instructions */}
        <h2>Instructions</h2>
        {recipe.cocktail_instructions.map((instruction, index) => (
          <div key={instruction.id || index} className="nested-item">
            <input
              type="number"
              placeholder="Step Number"
              value={instruction.step_number}
              onChange={(e) => handleInstructionChange(index, 'step_number', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Description"
              value={instruction.description}
              onChange={(e) => handleInstructionChange(index, 'description', e.target.value)}
              required
            />
          </div>
        ))}

        {/* Tools */}
        <h2>Tools</h2>
        {recipe.cocktail_tools.map((tool, index) => (
          <div key={tool.id || index} className="nested-item">
            <input
              type="text"
              placeholder="Tool Name"
              value={tool.tool_name}
              onChange={(e) => handleToolChange(index, e.target.value)}
              required
            />
          </div>
        ))}

        {/* Tags */}
        <h2>Tags</h2>
        {recipe.cocktail_tags.map((tag, index) => (
          <div key={tag.id || index} className="nested-item">
            <input
              type="text"
              placeholder="Tag Name"
              value={tag.tag_name}
              onChange={(e) => handleTagChange(index, e.target.value)}
              required
            />
          </div>
        ))}

        {/* Story + Bartender Tips */}
        <h2>Story</h2>
        <textarea name="story" placeholder="Story" value={recipe.story} onChange={handleChange}></textarea>

        <h2>Bartender Tips</h2>
        <textarea name="bartender_tips" placeholder="Bartender Tips" value={recipe.bartender_tips} onChange={handleChange}></textarea>

        <button type="submit" className="submit-button">Update Cocktail Recipe</button>
      </form>
    </div>
  );
}
