class Api::PasswordResetsController < ApplicationController
    def create
        user = User.find_by_email(params[:email])
        user.send_password_reset if user
    end

    def edit
        @user = User.find_by_password_reset_token!(params[:id])
    end

    def update
        @user = User.find_by_password_reset_token!(params[:data][:password_reset_token])
        @user.update_attributes(password_params)
        @user.save!
    end

    def password_params
        params.require(:data).permit(:password_reset_token, :password)
    end
end
