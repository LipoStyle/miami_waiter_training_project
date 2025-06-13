# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  before_action :authenticate_request

  private

  def authenticate_request
    token = request.headers['Authorization']&.split(' ')&.last
    payload = decode_jwt(token)

    if payload && payload['employee_id']
      @current_employee = Employee.find_by(id: payload['employee_id'])
      render json: { error: 'Unauthorized' }, status: :unauthorized unless @current_employee
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end

  def current_employee
    @current_employee
  end

  def decode_jwt(token)
    return nil if token.blank?

    begin
      JwtService.decode(token)
    rescue StandardError
      nil
    end
  end
end
