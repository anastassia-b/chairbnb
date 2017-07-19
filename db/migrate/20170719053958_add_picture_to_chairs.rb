class AddPictureToChairs < ActiveRecord::Migration[5.1]
  def change
    add_column :chairs, :picture, :string
  end
end
