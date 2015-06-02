#
class AuthController < ApplicationController
  def login
    credentials = login_params
    user = User.find_by email: credentials[:email]
    if user && user.authenticate(credentials[:password])
      render json: { token: user.token }
    else
      head :bad_request
    end
  end

  def register
    if User.create(login_params
       .merge(password_confirmation: nil)).valid?
      head :created
    else
      head :bad_request
    end
  end

  private

  def login_params
    params.require(:credentials).permit(:email, :password)
  end
end
