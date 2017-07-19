class AddSeatingToChairs < ActiveRecord::Migration[5.1]
  def change
    add_column :chairs, :seating, :integer, null: false, default: 2
  end
end
