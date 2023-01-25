class UsersController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
skip_before_action :authorize, only: :create


    def index
        users = User.all
        render json: users, status: :ok
    end

    def show 
       current_user = User.find(session[:user_id])
       render json: current_user
    end 

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end 
    

    private
    def render_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end
    def user_params
        params.permit(:username, :password)
    end
end
