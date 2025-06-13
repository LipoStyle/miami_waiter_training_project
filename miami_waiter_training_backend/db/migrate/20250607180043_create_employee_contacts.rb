# db/migrate/20250xxxxx_create_employee_contacts.rb
class CreateEmployeeContacts < ActiveRecord::Migration[8.0]
  def change
    create_table :employee_contacts do |t|
      t.references :employee,    null: false, foreign_key: true
      t.string     :phone_number
      t.string     :email
      t.string     :emergency_contact_name
      t.string     :emergency_contact_phone

      t.timestamps
    end
  end
end
