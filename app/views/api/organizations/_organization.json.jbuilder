json.set! organization.id do
    json.extract! organization, :id, :name, :hourly_rate
end