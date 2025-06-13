class CreateCocktailTools < ActiveRecord::Migration[8.0]
  def change
    create_table :cocktail_tools do |t|
      t.references :cocktail_recipe, null: false, foreign_key: true

      t.string :tool_name, null: false

      t.timestamps
    end
  end
end
