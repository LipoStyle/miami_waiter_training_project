module Api
  module V1
    class EmployeesController < ApplicationController
      skip_before_action :authenticate_request, raise: false

      # GET /api/v1/employees
      def index
        emps = Employee
          .includes(:employee_contact, :employee_detail, :employee_credential)
          .all

        render json: emps.map { |emp|
          {
            id: emp.id,
            name: emp.name,
            surname: emp.surname,
            job_role: emp.job_role,
            description: emp.description,
            profile_image: emp.profile_image,
            employee_contact: {
              id: emp.employee_contact&.id, # ADD id
              phone_number: emp.employee_contact&.phone_number,
              email: emp.employee_contact&.email,
              emergency_contact_name: emp.employee_contact&.emergency_contact_name,
              emergency_contact_phone: emp.employee_contact&.emergency_contact_phone
            },
            employee_detail: {
              id: emp.employee_detail&.id, # ADD id
              hire_date: emp.employee_detail&.hire_date,
              status: emp.employee_detail&.status,
              contract_type: emp.employee_detail&.contract_type,
              working_hours_per_week: emp.employee_detail&.working_hours_per_week,
              shift_preference: emp.employee_detail&.shift_preference
            },
            employee_credential: {
              id: emp.employee_credential&.id, # ADD id
              username: emp.employee_credential&.username,
              role: emp.employee_credential&.role
            }
          }
        }
      end

      # POST /api/v1/employees
      def create
        emp = Employee.new(employee_params)

        if emp.save
          render json: { message: 'Employee created successfully', id: emp.id }, status: :created
        else
          render json: { errors: emp.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # GET /api/v1/employees/:id
      def show
        emp = Employee
          .includes(:employee_contact, :employee_detail, :employee_credential)
          .find_by(id: params[:id])

        if emp
          render json: {
            id: emp.id,
            name: emp.name,
            surname: emp.surname,
            job_role: emp.job_role,
            description: emp.description,
            profile_image: emp.profile_image,
            employee_contact: {
              id: emp.employee_contact&.id, # ADD id
              phone_number: emp.employee_contact&.phone_number,
              email: emp.employee_contact&.email,
              emergency_contact_name: emp.employee_contact&.emergency_contact_name,
              emergency_contact_phone: emp.employee_contact&.emergency_contact_phone
            },
            employee_detail: {
              id: emp.employee_detail&.id, # ADD id
              hire_date: emp.employee_detail&.hire_date,
              status: emp.employee_detail&.status,
              contract_type: emp.employee_detail&.contract_type,
              working_hours_per_week: emp.employee_detail&.working_hours_per_week,
              shift_preference: emp.employee_detail&.shift_preference
            },
            employee_credential: {
              id: emp.employee_credential&.id, # ADD id
              username: emp.employee_credential&.username,
              role: emp.employee_credential&.role
            }
          }
        else
          render json: { error: 'Employee not found' }, status: :not_found
        end
      end

      # PUT /api/v1/employees/:id
      def update
        emp = Employee.find_by(id: params[:id])

        if emp.nil?
          render json: { error: 'Employee not found' }, status: :not_found
          return
        end

        if emp.update(employee_params)
          render json: { message: 'Employee updated successfully' }, status: :ok
        else
          render json: { errors: emp.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/employees/:id
      def destroy
        emp = Employee.find_by(id: params[:id])

        if emp
          emp.destroy
          render json: { message: 'Employee deleted successfully' }, status: :ok
        else
          render json: { error: 'Employee not found' }, status: :not_found
        end
      end

      private

      def employee_params
        params.require(:employee).permit(
          :name,
          :surname,
          :job_role,
          :description,
          :profile_image,
          employee_contact_attributes: [
            :id, # REQUIRED for update!
            :phone_number,
            :email,
            :emergency_contact_name,
            :emergency_contact_phone
          ],
          employee_detail_attributes: [
            :id, # REQUIRED for update!
            :hire_date,
            :status,
            :contract_type,
            :working_hours_per_week,
            :shift_preference
          ],
          employee_credential_attributes: [
            :id, # REQUIRED for update!
            :username,
            :password,
            :role
          ]
        )
      end
    end
  end
end
