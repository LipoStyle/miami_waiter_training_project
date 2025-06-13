class EmployeeCredential < ApplicationRecord
  belongs_to :employee
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :role, inclusion: { in: %w[employee admin] }
end