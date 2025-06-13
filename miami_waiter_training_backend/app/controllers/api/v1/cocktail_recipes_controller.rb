module Api
  module V1
    class CocktailRecipesController < ApplicationController
      skip_before_action :authenticate_request, raise: false

      # GET /api/v1/cocktail_recipes
      def index
        recipes = CocktailRecipe.includes(:cocktail_ingredients, :cocktail_instructions, :cocktail_tools, :cocktail_tags).all

        render json: recipes.map { |recipe| serialize_recipe(recipe) }
      end

      # GET /api/v1/cocktail_recipes/:id
      def show
        recipe = CocktailRecipe.includes(:cocktail_ingredients, :cocktail_instructions, :cocktail_tools, :cocktail_tags).find_by(id: params[:id])

        if recipe
          render json: serialize_recipe(recipe)
        else
          render json: { error: 'Cocktail recipe not found' }, status: :not_found
        end
      end

      # POST /api/v1/cocktail_recipes
      def create
        recipe = CocktailRecipe.new(cocktail_recipe_params)

        if recipe.save
          render json: { message: 'Cocktail recipe created successfully', id: recipe.id }, status: :created
        else
          render json: { errors: recipe.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # PUT /api/v1/cocktail_recipes/:id
      def update
        recipe = CocktailRecipe.find_by(id: params[:id])

        if recipe.nil?
          render json: { error: 'Cocktail recipe not found' }, status: :not_found
          return
        end

        if recipe.update(cocktail_recipe_params)
          render json: { message: 'Cocktail recipe updated successfully' }, status: :ok
        else
          render json: { errors: recipe.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/cocktail_recipes/:id
      def destroy
        recipe = CocktailRecipe.find_by(id: params[:id])

        if recipe
          recipe.destroy
          render json: { message: 'Cocktail recipe deleted successfully' }, status: :ok
        else
          render json: { error: 'Cocktail recipe not found' }, status: :not_found
        end
      end

      private

      def cocktail_recipe_params
        params.require(:cocktail_recipe).permit(
          :name,
          :image,
          :category,
          :glassware,
          :garnish,
          :ice,
          :abv,
          :story,
          :bartender_tips,
          cocktail_ingredients_attributes: [
            :id, :name, :quantity, :preparation_notes, :position, :_destroy
          ],
          cocktail_instructions_attributes: [
            :id, :step_number, :description, :_destroy
          ],
          cocktail_tools_attributes: [
            :id, :tool_name, :_destroy
          ],
          cocktail_tags_attributes: [
            :id, :tag_name, :_destroy
          ]
        )
      end

      # Helper method to serialize full recipe (used in index + show)
      def serialize_recipe(recipe)
        {
          id: recipe.id,
          name: recipe.name,
          image: recipe.image,
          category: recipe.category,
          glassware: recipe.glassware,
          garnish: recipe.garnish,
          ice: recipe.ice,
          abv: recipe.abv,
          story: recipe.story,
          bartender_tips: recipe.bartender_tips,
          cocktail_ingredients: recipe.cocktail_ingredients.map { |ing| {
            id: ing.id,
            name: ing.name,
            quantity: ing.quantity,
            preparation_notes: ing.preparation_notes,
            position: ing.position
          }},
          cocktail_instructions: recipe.cocktail_instructions.map { |inst| {
            id: inst.id,
            step_number: inst.step_number,
            description: inst.description
          }},
          cocktail_tools: recipe.cocktail_tools.map { |tool| {
            id: tool.id,
            tool_name: tool.tool_name
          }},
          cocktail_tags: recipe.cocktail_tags.map { |tag| {
            id: tag.id,
            tag_name: tag.tag_name
          }}
        }
      end
    end
  end
end
