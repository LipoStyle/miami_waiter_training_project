class CocktailInstruction < ApplicationRecord
  belongs_to :cocktail_recipe

  validates :step_number, presence: true
  validates :description, presence: true
end
