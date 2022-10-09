import groupService from '../../services/groupService'
import userService from '../../services/userService'
import getResponse from '../../utils/getResponse'
import {getGroupsFetching, getGroupsSuccses, getGroupsError} from '../slices/groupSlices'

export const getAllGroups = () => async dispatch => {
  try {
    dispatch(getGroupsFetching())
    const response = await groupService.getAllGroups()
    const {ok, data, errors} = getResponse(response)

    if (ok) {
      dispatch(getGroupsSuccses(data))
    } else {
      dispatch(getGroupsError(errors))
    }
  } catch (e) {}
}

export const createGroup = form => async dispatch => {
  try {
    const response = await groupService.createGroup(form)
    const {ok, data, errors} = getResponse(response)
    return {ok, errors}
  } catch (e) {}
}
