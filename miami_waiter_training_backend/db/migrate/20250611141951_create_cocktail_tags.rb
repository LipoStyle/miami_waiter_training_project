class CreateCocktailTags < ActiveRecord::Migration[8.0]
  def change
    create_table :cocktail_tags do |t|
      t.references :cocktail_recipe, null: false, foreign_key: true

      t.string :tag_name, null: false

      t.timestamps
    end
  end
end
