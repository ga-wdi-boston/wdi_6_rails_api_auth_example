#
class UsersController < OpenReadController
  def index
    render json: User.all
  end

  def show
    # use find_by so it doens't raise an exception
    if (user = User.find_by(id: params[:id]))
      render json: user
    else
      head :no_content
    end
  end
end
