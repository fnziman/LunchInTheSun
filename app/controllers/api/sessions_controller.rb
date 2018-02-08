class Api::SessionsController < ApplicationController
  def create ##login
    @user = User.find_by_credentials(
      params[:username], params[:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["invalid username or password"], status: 401
    end
  end

  def destroy ##logout
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ["no current user"], status: 404
    end
  end

end
