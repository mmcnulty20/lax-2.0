class Api::UsersController < ApplicationController
    def create
        @user = User.find_by_credentials(user_params)
        if @user
            login!(@user)
            render "api/users/user_stub"
        else
            render json: ["Sorry, you entered an incorrect email address or password."], status: 401 
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {}
        else
            render json: ["User not found"], status: 404
        end
    end

    private
    def user_params
        params.require(:user).transform_keys(&:underscore).permit(:email, :password)
    end
end