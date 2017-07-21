class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :body, null: false, default: ""
      t.integer :rating, null: false
      t.integer :chair_id, null: false
      t.timestamps null: false
    end

    add_index :reviews, :chair_id
  end
end
