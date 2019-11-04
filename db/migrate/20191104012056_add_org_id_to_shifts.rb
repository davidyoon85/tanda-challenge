class AddOrgIdToShifts < ActiveRecord::Migration[5.2]
  def change
    add_column :shifts, :organization_id, :integer, null: false
  end
end
