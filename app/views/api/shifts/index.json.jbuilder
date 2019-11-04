@shifts.each do |shift|
  json.partial! "api/shifts/shift", shift: shift
end