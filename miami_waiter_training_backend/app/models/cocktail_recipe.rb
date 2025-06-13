class CocktailRecipe < ApplicationRecord
  has_many :cocktail_ingredients, dependent: :destroy
  has_many :cocktail_instructions, dependent: :destroy
  has_many :cocktail_tools, dependent: :destroy
  has_many :cocktail_tags, dependent: :destroy

  accepts_nested_attributes_for :cocktail_ingredients, allow_destroy: true
  accepts_nested_attributes_for :cocktail_instructions, allow_destroy: true
  accepts_nested_attributes_for :cocktail_tools, allow_destroy: true
  accepts_nested_attributes_for :cocktail_tags, allow_destroy: true

  validates :name, :category, :glassware, presence: true
end
