import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateDrinkRecipe.css';
import { toast } from 'react-toastify';

import { API_BASE_URL } from '../../../config';

export default function CreateDrinkRecipe() {
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
    cocktail_ingredients_attributes: [],
    cocktail_instructions_attributes: [],
    cocktail_tools_attributes: [],
    cocktail_tags_attributes: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleAddIngredient = () => {
    setRecipe({
      ...recipe,
      cocktail_ingredients_attributes: [
        ...recipe.cocktail_ingredients_attributes,
        { name: '', quantity: '', preparation_notes: '' },
      ],
    });
  };

  const handleIngredientChange = (index, field, value) => {
    const updated = [...recipe.cocktail_ingredients_attributes];
    updated[index][field] = value;
    setRecipe({ ...recipe, cocktail_ingredients_attributes: updated });
  };

  const handleAddInstruction = () => {
    setRecipe({
      ...recipe,
      cocktail_instructions_attributes: [
        ...recipe.cocktail_instructions_attributes,
        { step_number: recipe.cocktail_instructions_attributes.length + 1, description: '' },
      ],
    });
  };

  const handleInstructionChange = (index, field, value) => {
    const updated = [...recipe.cocktail_instructions_attributes];
    updated[index][field] = value;
    setRecipe({ ...recipe, cocktail_instructions_attributes: updated });
  };

  const handleAddTool = () => {
    setRecipe({
      ...recipe,
      cocktail_tools_attributes: [
        ...recipe.cocktail_tools_attributes,
        { tool_name: '' },
      ],
    });
  };

  const handleToolChange = (index, value) => {
    const updated = [...recipe.cocktail_tools_attributes];
    updated[index].tool_name = value;
    setRecipe({ ...recipe, cocktail_tools_attributes: updated });
  };

  const handleAddTag = () => {
    setRecipe({
      ...recipe,
      cocktail_tags_attributes: [
        ...recipe.cocktail_tags_attributes,
        { tag_name: '' },
      ],
    });
  };

  const handleTagChange = (index, value) => {
    const updated = [...recipe.cocktail_tags_attributes];
    updated[index].tag_name = value;
    setRecipe({ ...recipe, cocktail_tags_attributes: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/cocktail_recipes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cocktail_recipe: recipe }),
      });

      if (!response.ok) {
        throw new Error('Failed to create cocktail recipe');
      }

      toast.success('Cocktail recipe created successfully!');
      navigate('/admin/drinkrecipes');
    } catch (error) {
      console.error('Error creating cocktail recipe:', error);
      toast.error('Error creating cocktail recipe');
    }
  };

  return (
    <div className="create-drink-recipe-page">
      <h1>Create Cocktail Recipe</h1>

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
        {recipe.cocktail_ingredients_attributes.map((ingredient, index) => (
          <div key={index} className="nested-item">
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
        <button type="button" onClick={handleAddIngredient}>+ Add Ingredient</button>

        {/* Instructions */}
        <h2>Instructions</h2>
        {recipe.cocktail_instructions_attributes.map((instruction, index) => (
          <div key={index} className="nested-item">
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
        <button type="button" onClick={handleAddInstruction}>+ Add Instruction</button>

        {/* Tools */}
        <h2>Tools</h2>
        {recipe.cocktail_tools_attributes.map((tool, index) => (
          <div key={index} className="nested-item">
            <input
              type="text"
              placeholder="Tool Name"
              value={tool.tool_name}
              onChange={(e) => handleToolChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddTool}>+ Add Tool</button>

        {/* Tags */}
        <h2>Tags</h2>
        {recipe.cocktail_tags_attributes.map((tag, index) => (
          <div key={index} className="nested-item">
            <input
              type="text"
              placeholder="Tag Name"
              value={tag.tag_name}
              onChange={(e) => handleTagChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddTag}>+ Add Tag</button>

        {/* Story + Bartender Tips */}
        <h2>Story</h2>
        <textarea name="story" placeholder="Story" value={recipe.story} onChange={handleChange}></textarea>

        <h2>Bartender Tips</h2>
        <textarea name="bartender_tips" placeholder="Bartender Tips" value={recipe.bartender_tips} onChange={handleChange}></textarea>

        <button type="submit" className="submit-button">Create Cocktail Recipe</button>
      </form>
    </div>
  );
}
