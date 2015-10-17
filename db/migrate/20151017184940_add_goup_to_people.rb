class AddGoupToPeople < ActiveRecord::Migration
  def change
    add_reference :people, :group, index: true, foreign_key: true
  end
end
