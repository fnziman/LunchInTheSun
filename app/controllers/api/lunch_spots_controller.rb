class Api::LunchSpotsController < ApplicationController

  def create
    @lunch_spot = LunchSpot.new(lunch_spot_params)
    if @lunch_spot.save
      render :show
    else
      render json: @lunch_spot.errors.full_messages, status: 422
    end
  end

  def index
    @lunch_spots = LunchSpot.all
    render :index
  end

  private
  def lunch_spot_params
    params.require(:lunch_spot).permit(:description, :lat, :lng)
  end
end
