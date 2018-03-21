class FixLunchSpotsDescription < ActiveRecord::Migration[5.1]
  def change
    rename_column :lunch_spots, :descrition, :description
  end
end
