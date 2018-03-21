class CreateLunchSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :lunch_spots do |t|
      t.string :descrition, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
  end
end
