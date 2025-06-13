# db/migrate/20250xxxxx_create_employee_credentials.rb
class CreateEmployeeCredentials < ActiveRecord::Migration[8.0]
  def change
    create_table :employee_credentials do |t|
      t.references :employee,     null: false, foreign_key: true
      t.string     :username,     null: false, index: { unique: true }
      t.string     :password_digest, null: false
      t.string     :role,         null: false, default: "employee"

      t.timestamps
    end
  end
end
