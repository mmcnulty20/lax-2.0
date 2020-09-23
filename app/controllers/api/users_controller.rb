class Api::UsersController < ApplicationController

    def index
        if params[:search]
            @users = User
                .where("username LIKE '%#{params[:search]}%'")
                .limit(10)
        else
            @users = User.limit(10)
        end
    end
    
    def show
        @user = User.find(params[:id])
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :user_stub
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        if current_user.id == params[:id]
            @user = current_user
            if @user.update(user_params)
                render :user_stub
            else
                render json: @user.errors.full_messages, status: 422
            end
        end
    end

    def destroy
        if current_user
            current_user.destroy
            logout!
        end
    end

    def email_in_use
        render json: { inUse: User.exists?(user_params[:email]) } 
    end

    private
    def user_params
        params.require(:user).transform_keys(&:underscore).permit(:username, :email, :password)
    end

end