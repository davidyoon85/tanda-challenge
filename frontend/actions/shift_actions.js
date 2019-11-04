import * as APIUtil from "../util/shift_api_util";

export const RECEIVE_SHIFTS = "RECEIVE_SHIFTS";
export const RECEIVE_SHIFT = "RECEIVE_SHIFT";
export const RECEIVE_SHIFT_ERRORS = "RECEIVE_SHIFT_ERRORS";

export const receiveShifts = shifts => ({
  type: RECEIVE_SHIFTS,
  shifts
});

export const receiveShift = shift => ({
  type: RECEIVE_SHIFT,
  shift
});

export const receiveErrors = errors => ({
  type: RECEIVE_SHIFT_ERRORS,
  errors
});

export const fetchShifts = () => dispatch => {
  APIUtil.fetchShifts().then(
    shifts => {
      dispatch(receiveShifts(shifts));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const createShift = shift => dispatch =>
  APIUtil.createShift(shift).then(
    shift => dispatch(receiveShift(shift)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
