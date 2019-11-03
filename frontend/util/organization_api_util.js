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
