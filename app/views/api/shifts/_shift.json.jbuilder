json.set! shift.id do
    json.extract! shift, :id, :user_id, :start, :finish, :break_length, :organization_id

    json.user do
      json.extract! shift.user, :name
    end

    json.organization do
      json.extract! shift.organization, :name, :hourly_rate
    end
end