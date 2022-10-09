import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  allGroupsError: '',
  allGroups: [],
}

export const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    getGroupsFetching: state => {
      state.isLoading = true
    },
    getGroupsSuccses: (state, action) => {
      state.isLoading = false
      state.allGroups = action.payload
      state.allGroupsError = ''
    },
    getGroupsError: (state, action) => {
      state.isLoading = false
      state.allGroups = []
      state.allGroupsError = action.payload
    },
  },
})

export const {getGroupsFetching, getGroupsSuccses, getGroupsError} = groupSlice.actions

export default groupSlice.reducer
