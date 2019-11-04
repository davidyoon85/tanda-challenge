# == Schema Information
#
# Table name: shifts
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  start           :datetime         not null
#  finish          :datetime         not null
#  break_length    :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  organization_id :integer          not null
#

class Shift < ApplicationRecord
    validates :user_id, :start, :finish, presence: true
  
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :organization,
        foreign_key: :organization_id,
        class_name: :Organization
end
  
