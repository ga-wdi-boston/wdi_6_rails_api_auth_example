# Everything except AuthController should inherit from this
class ApiController < ApplicationController
  before_action :authenticate

  private

  attr_reader :current_user

  def authenticate
    authenticate_or_request_with_http_token do |token, _options|
      @current_user = User.find_by token: token
    end
  end
end
