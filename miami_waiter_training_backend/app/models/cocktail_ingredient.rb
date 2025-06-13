class CocktailIngredient < ApplicationRecord
  belongs_to :cocktail_recipe

  validates :name, presence: true
end
