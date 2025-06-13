class AuthController < ApplicationController
  # Skip auth here so you can log in
  skip_before_action :authenticate_request, raise: false

  def login
    cred = EmployeeCredential.find_by(username: params[:username])
    if cred&.authenticate(params[:password])
      token = JwtService.encode(employee_id: cred.employee_id)
      render json: {
        token: token,
        role:  cred.role      # ← add this line!
      }, status: :ok
    else
      render json: { error: 'Invalid credentials' }, status: :unauthorized
    end
  end
end
