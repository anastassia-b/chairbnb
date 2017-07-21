class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }
  # validates :bench
  belongs_to :bench
end
