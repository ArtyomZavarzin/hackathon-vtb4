import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  userEditData: {},
  userEditError: '',
  allUsersError: '',
  allUsers: [],
  isLoadingUserInfo: false,
  userInfo: {},
  userInfoError: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserEditFetching: state => {
      state.isLoading = true
    },
    getUserEditSuccses: (state, action) => {
      state.isLoading = false
      state.userEditData = action.payload
      state.userEditError = ''
    },
    getUserEditError: (state, action) => {
      state.isLoading = false
      state.userEditData = {}
      state.userEditError = action.payload
    },

    getAllUsersFetching: state => {
      state.isLoading = true
    },
    getAllUsersSuccses: (state, action) => {
      state.isLoading = false
      state.allUsers = action.payload
      state.allUsersError = ''
    },
    getAllUsersError: (state, action) => {
      state.isLoading = false
      state.allUsers = []
      state.allUsersError = action.payload
    },

    getUserInfoFetching: state => {
      state.isLoadingUserInfo = true
    },
    getUserInfoSuccses: (state, action) => {
      state.isLoadingUserInfo = false
      state.userInfo = action.payload
      state.userInfoError = ''
    },
    getUserInfoError: (state, action) => {
      state.isLoadingUserInfo = false
      state.userInfo = {}
      state.userInfoError = action.payload
    },
  },
})

export const {
  getUserEditFetching,
  getUserEditSuccses,
  getUserEditError,
  getAllUsersFetching,
  getAllUsersSuccses,
  getAllUsersError,
  getUserInfoFetching,
  getUserInfoSuccses,
  getUserInfoError,
} = userSlice.actions

export default userSlice.reducer
