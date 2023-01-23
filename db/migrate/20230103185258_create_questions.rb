class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :image
      t.text :body

      t.timestamps
    end
  end
end
