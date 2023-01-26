class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :image, :body
  has_many :comments
  has_many :users, through: :comments
end
