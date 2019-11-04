class Api::ShiftsController < ApplicationController
    def create
      @shift = Shift.new(shift_params)

      if @shift.save
        render :show
      else
        render json: @shift.errors.full_messages, status: 422
      end
    end
  
    def index
      @shifts = Shift.where(:organization_id == current_user.organization_id)
      render :index
    end

    def destroy
      @shift = Shift.find(params[:id])
      if @shift.destroy
        render :show
      else
        render json: ["Unable to delete shift."], status: 404
      end
    end
  
    private
  
    def shift_params
      params.require(:shift).permit(:user_id, :start, :finish, :break_length, :organization_id)
    end
  end
  