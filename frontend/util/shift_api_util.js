export const fetchShifts = () =>
  $.ajax({
    method: "GET",
    url: "api/shifts"
  });

export const createShift = shift =>
  $.ajax({
    method: "POST",
    url: "/api/shifts",
    data: { shift }
  });
