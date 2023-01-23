class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments, status: :created
    end

    def destroy 
        game = Comment.find(params[:id])
        game.destroy
        head :no_content
    end

end

