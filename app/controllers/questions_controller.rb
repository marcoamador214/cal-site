class RatingsController < ApplicationController

    def index
        questions = Question.all
        render json: questions, status: :ok
    end
    
end
