class Api::ChairsController < ApplicationController

  def index
    @chairs = Chair.all
    render :index
  end

  def show
    @chair = Chair.find(params[:id])
  end

  def create
    @chair = Chair.create!(chair_params)
    render :show
  end

  private

  def chair_params
    params.require(:chair).permit(:lat, :lng, :description, :seating, :picture)
  end
end
