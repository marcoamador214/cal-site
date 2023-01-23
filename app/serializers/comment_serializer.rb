class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body
  has_one :user
  has_one :question
end
