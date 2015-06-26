#
class OpenReadController < ProtectedController
  skip_before_action :authenticate, if: :read_action?

  private

  def current_user
    if (user = super)
      user
    else
      auth_header_value = request.headers['Authorization']
      User.find_by(token: auth_header_value.split('=')[1]) if auth_header_value
    end
  end

  def read_action?
    action = action_name.to_sym
    action == :show || action == :index
  end
end
