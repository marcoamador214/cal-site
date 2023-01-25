class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :image, :body
  has_many :comments
end
