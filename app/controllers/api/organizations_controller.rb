class Api::OrganizationsController < ApplicationController
    def create
        @organization = Organization.new(organization_params)

        if @organization.save
            render :show
        else
            render json: @organization.errors.full_messages, status: 401
        end
    end

    def show
        @organization = Organization.find(params[:id])
        if @organization
            render :show
        else 
            render json: ["Organization not found."], status: 404
        end
    end

    def index
        if current_user
            @organizations = Organization.all
            render :index
        else
            render json: ["Please login"], status: 404
        end
    end
  
    def update
        @organization = Organization.find(params[:id])
        if @organization.update(organization_params)
            render :show, status: 200
        else
            render json: @organization.errors.full_messages, status: 409
        end
    end
  
    def destroy
      @organization = Organization.find(params[:id])
      if @organization.destroy
        render :show
      else
        render json: ["Unable to delete organization."], status: 404
      end
    end

    def join
        @organization = Organization.find params[:id]
        current_user.update_attribute(:organization_id, @organization.id)
       render current_user
      end
      
      def leave
        @organization = Organization.find params[:id]
        current_user.update_attribute(:organization_id, nil)
        userShifts = Shift.where(:user_id => current_user.id)
        userShifts.destroy_all

        render current_user
      end

    private
  
    def organization_params
      params.require(:organization).permit(:name, :hourly_rate)
    end
  end
  