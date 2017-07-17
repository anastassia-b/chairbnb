class CreateChairs < ActiveRecord::Migration[5.1]
  def change
    create_table :chairs do |t|
      t.string :description
      t.float :lat
      t.float :lng
      t.timestamps null: false
    end
  end
end
