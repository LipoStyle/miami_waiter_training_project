class CreateCocktailInstructions < ActiveRecord::Migration[8.0]
  def change
    create_table :cocktail_instructions do |t|
      t.references :cocktail_recipe, null: false, foreign_key: true

      t.integer :step_number, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
