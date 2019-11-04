export const login = user =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });

export const signup = user =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  });

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  });

export const update = user => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user }
  });
};

export const resetEmail = email => {
  return $.ajax({
    url: `/api/password_resets`,
    method: "POST",
    data: { email }
  });
};

export const resetPassword = data => {
  return $.ajax({
    url: `/api/password_resets/${data.tokenId}`,
    method: "PUT",
    data: { data }
  });
};
