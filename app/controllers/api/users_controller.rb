class Api::UsersController < ApplicationController
  def create ##signup
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/user/show'
    else
      redner json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end