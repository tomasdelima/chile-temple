class Person < ActiveRecord::Base
  belongs_to :group
  validates :name, :email, presence: true
end
