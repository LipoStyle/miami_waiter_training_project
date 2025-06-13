module Api
  module V1
    class ProfilesController < ApplicationController
      # Employee must be authenticated → do not skip authenticate_request here!

      def show
        employee = current_employee

        if employee.nil?
          render json: { error: 'Unauthorized' }, status: :unauthorized
          return
        end

        render json: {
          id: employee.id,
          name: employee.name,
          surname: employee.surname,
          job_role: employee.job_role,
          description: employee.description,
          profile_image: employee.profile_image,
          employee_contact: {
            id: employee.employee_contact&.id,
            phone_number: employee.employee_contact&.phone_number,
            email: employee.employee_contact&.email,
            emergency_contact_name: employee.employee_contact&.emergency_contact_name,
            emergency_contact_phone: employee.employee_contact&.emergency_contact_phone
          },
          employee_detail: {
            id: employee.employee_detail&.id,
            hire_date: employee.employee_detail&.hire_date,
            status: employee.employee_detail&.status,
            contract_type: employee.employee_detail&.contract_type,
            working_hours_per_week: employee.employee_detail&.working_hours_per_week,
            shift_preference: employee.employee_detail&.shift_preference
          },
          employee_credential: {
            id: employee.employee_credential&.id,
            username: employee.employee_credential&.username,
            role: employee.employee_credential&.role
          }
        }
      end
    end
  end
end
