# db/migrate/20250xxxxx_create_employees.rb
class CreateEmployees < ActiveRecord::Migration[8.0]
  def change
    create_table :employees do |t|
      t.string :name,        null: false
      t.string :surname,     null: false
      t.string :job_role,    null: false
      t.text   :description
      t.string :profile_image

      t.timestamps
    end
  end
end
