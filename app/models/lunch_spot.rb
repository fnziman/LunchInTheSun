# == Schema Information
#
# Table name: lunch_spots
#
#  id         :integer          not null, primary key
#  descrition :string           not null
#  lat        :float            not null
#  lng        :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class LunchSpot < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true


end
