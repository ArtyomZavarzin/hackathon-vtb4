import userService from '../../services/userService'
import getResponse from '../../utils/getResponse'
import {
  getUserEditFetching,
  getUserEditSuccses,
  getUserEditError,
  getAllUsersFetching,
  getAllUsersSuccses,
  getUserInfoFetching,
  getUserInfoSuccses,
  getUserInfoError,
} from '../slices/userSlices'

export const getUserEditData = id => async dispatch => {
  try {
    dispatch(getUserEditFetching())
    const response = await userService.getUserEdit({id: id})
    const {ok, data, errors} = getResponse(response)

    if (ok) {
      dispatch(getUserEditSuccses(data))
    } else {
      dispatch(getUserEditError(errors))
    }
  } catch (e) {}
}

export const editUserData = form => async dispatch => {
  try {
    const response = await userService.editUser(form)
    const {ok, data, errors} = getResponse(response)

    if (ok) {
      dispatch(getUserInfo(form.userId))
    } else {
      // dispatch(getUserEditError(errors))
    }
    return {ok, errors}
  } catch (e) {}
}

export const getAllUsers = () => async dispatch => {
  try {
    dispatch(getAllUsersFetching())
    const response = await userService.getAllUsers()
    const {ok, data, errors} = getResponse(response)

    if (ok) {
      dispatch(getAllUsersSuccses(data))
    } else {
      dispatch(getAllUsersFetching(errors))
    }
  } catch (e) {}
}

export const getUserInfo = id => async dispatch => {
  try {
    dispatch(getUserInfoFetching())
    const response = await userService.getUserInfo({id: id})
    const {ok, data, errors} = getResponse(response)

    if (ok) {
      await dispatch(getUserInfoSuccses(data))
    } else {
      dispatch(getUserInfoError(errors[0].value))
    }
    return {ok, errors}
  } catch (e) {
    // console.log(e)
    // dispatch(authFetchingError(e.message))
  }
}
