class CreateCocktailRecipes < ActiveRecord::Migration[8.0]
  def change
    create_table :cocktail_recipes do |t|
      # Basic Info
      t.string :name, null: false
      t.string :image
      t.string :category
      t.string :glassware

      # Garnish
      t.string :garnish

      # Ice
      t.string :ice

      # Alcohol Content
      t.decimal :abv, precision: 5, scale: 2 # e.g. 12.50%

      # Notes / Story
      t.text :story
      t.text :bartender_tips

      t.timestamps
    end
  end
end
