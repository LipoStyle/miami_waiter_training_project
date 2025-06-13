class CocktailTag < ApplicationRecord
  belongs_to :cocktail_recipe

  validates :tag_name, presence: true
end
