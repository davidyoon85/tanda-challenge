import * as APIUtil from "../util/organization_api_util";

export const RECEIVE_ORGANIZATIONS = "RECEIVE_ORGANIZATIONS";
export const RECEIVE_ORGANIZATION = "RECEIVE_ORGANIZATION";
export const REMOVE_ORGANIZATION = "REMOVE_ORGANIZATION";
export const RECEIVE_ORGANIZATION_ERRORS = "RECEIVE_ORGANIZATION_ERRORS";

export const receiveOrganizations = organizations => ({
  type: RECEIVE_ORGANIZATIONS,
  organizations
});

export const receiveOrganization = organization => ({
  type: RECEIVE_ORGANIZATION,
  organization
});

export const removeOrganization = organizationId => ({
  type: REMOVE_ORGANIZATION,
  organizationId
});

export const receiveErrors = errors => ({
  type: RECEIVE_ORGANIZATION_ERRORS,
  errors
});

export const fetchOrganizations = () => dispatch => {
  APIUtil.fetchOrganizations().then(
    organizations => {
      dispatch(receiveOrganizations(organizations));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const fetchOrganization = organizationId => dispatch =>
  APIUtil.fetchOrganization(organizationId).then(
    organization => {
      dispatch(receiveOrganization(organization));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const createOrganization = organization => dispatch =>
  APIUtil.createOrganization(organization).then(
    organization => dispatch(receiveOrganization(organization)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const updateOrganization = organization => dispatch =>
  APIUtil.updateOrganization(organization).then(
    organization => dispatch(receiveOrganization(organization)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteOrganization = organizationId => dispatch =>
  APIUtil.deleteOrganization(organizationId).then(
    organization => dispatch(removeOrganization(organizationId)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
