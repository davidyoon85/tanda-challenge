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

export const deleteShift = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/shifts/${id}`,
    data: { id }
  });
