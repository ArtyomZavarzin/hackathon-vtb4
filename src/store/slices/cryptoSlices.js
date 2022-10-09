import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isLoadingcryptoBalace: false,
  cryptoBalaceData: {maticAmount: 0, coinsAmount: 0},
  cryptoBalaceError: '',
  isLoadingAllNft: false,
  allNftData: {balance: []},
  allNftError: '',
}

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    getCryptoBalaceFetching: state => {
      state.isLoadingcryptoBalace = true
    },
    getCryptoBalaceSuccses: (state, action) => {
      state.isLoadingcryptoBalace = false
      state.cryptoBalaceData = action.payload
      state.cryptoBalaceError = ''
    },
    getCryptoBalaceError: (state, action) => {
      state.isLoadingcryptoBalace = false
      state.cryptoBalaceData = {maticAmount: 0, coinsAmount: 0}
      state.cryptoBalaceError = action.payload
    },

    getAllNftFetching: state => {
      state.isLoadingAllNft = true
    },
    getAllNftSuccses: (state, action) => {
      state.isLoadingAllNft = false
      state.allNftData = action.payload
      state.allNftError = ''
    },
    getAllNftError: (state, action) => {
      state.isLoadingAllNft = false
      state.allNftData = {balance: []}
      state.allNftError = action.payload
    },
  },
})

export const {
  getCryptoBalaceFetching,
  getCryptoBalaceSuccses,
  getCryptoBalaceError,
  getAllNftFetching,
  getAllNftSuccses,
  getAllNftError,
} = cryptoSlice.actions

export default cryptoSlice.reducer
