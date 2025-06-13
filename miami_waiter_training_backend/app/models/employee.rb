class Employee < ApplicationRecord
  has_one :employee_contact,     dependent: :destroy
  has_one :employee_detail,      dependent: :destroy
  has_one :employee_credential,  dependent: :destroy

  accepts_nested_attributes_for :employee_contact,
                                :employee_detail,
                                :employee_credential
end
