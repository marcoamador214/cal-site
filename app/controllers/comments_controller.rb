class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments, status: :created
    end

    def create
        comment = Comment.create(comment_params)
        render json: comment, status: :created
    end

    def destroy 
        game = Comment.find(params[:id])
        game.destroy
        head :no_content
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :question_id)
    end

end

