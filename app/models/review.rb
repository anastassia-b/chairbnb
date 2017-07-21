class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }
  # validates :chair
  belongs_to :chair
end
