class CreateCocktailIngredients < ActiveRecord::Migration[8.0]
  def change
    create_table :cocktail_ingredients do |t|
      t.references :cocktail_recipe, null: false, foreign_key: true

      t.string :name, null: false
      t.string :quantity
      t.string :preparation_notes
      t.integer :position # optional ordering field

      t.timestamps
    end
  end
end
