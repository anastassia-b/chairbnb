class Chair < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  
end
