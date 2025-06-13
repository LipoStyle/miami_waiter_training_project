# db/migrate/20250xxxxx_create_employee_details.rb
class CreateEmployeeDetails < ActiveRecord::Migration[8.0]
  def change
    create_table :employee_details do |t|
      t.references :employee,               null: false, foreign_key: true
      t.date       :hire_date
      t.string     :status,                null: false, default: "inactive"
      t.string     :contract_type
      t.integer    :working_hours_per_week
      t.string     :shift_preference

      t.timestamps
    end
  end
end
