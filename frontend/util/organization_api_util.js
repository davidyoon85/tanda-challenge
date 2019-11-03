export const fetchOrganizations = () =>
  $.ajax({
    method: "GET",
    url: "api/organizations"
  });

export const fetchOrganization = organizationId =>
  $.ajax({
    method: "GET",
    url: `api/organizations/${organizationId}`
  });

export const createOrganization = organization =>
  $.ajax({
    method: "POST",
    url: "/api/organizations",
    data: { organization }
  });

export const deleteOrganization = organizationId =>
  $.ajax({
    method: "DELETE",
    url: `/api/organizations/${organizationId}`
  });

export const updateOrganization = organization => {
  return $.ajax({
    url: `/api/organizations/${organization.id}`,
    method: "PATCH",
    data: { organization }
  });
};

export const joinOrganization = organizationId => {
  return $.ajax({
    url: `/api/organizations/${organizationId}/join`,
    method: "GET"
  });
};

export const leaveOrganization = organizationId => {
  return $.ajax({
    url: `/api/organizations/${organizationId}/leave`,
    method: "GET"
  });
};
