@organizations.each do |organization|
  json.partial! "api/organizations/organization", organization: organization
end