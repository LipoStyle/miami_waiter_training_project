class CocktailTool < ApplicationRecord
  belongs_to :cocktail_recipe

  validates :tool_name, presence: true
end
