class Group < ActiveRecord::Base
  has_many :people, dependent: :destroy
  accepts_nested_attributes_for :people
end
