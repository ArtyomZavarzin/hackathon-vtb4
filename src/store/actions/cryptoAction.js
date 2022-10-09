import cryptoService from '../../services/cryptoService'
import getResponse, {getCryptoResponse} from '../../utils/getResponse'
import {
  getCryptoBalaceFetching,
  getCryptoBalaceSuccses,
  getCryptoBalaceError,
  getAllNftFetching,
  getAllNftSuccses,
  getAllNftError,
} from '../slices/cryptoSlices'

export const getCryptoBalance = publicKey => async dispatch => {
  try {
    dispatch(getCryptoBalaceFetching())
    const response = await cryptoService.getBalance(publicKey)
    const {ok, data, errors} = getCryptoResponse(response)
    if (ok) {
      dispatch(getCryptoBalaceSuccses(data))
    } else {
      dispatch(getCryptoBalaceError(errors))
    }
  } catch (e) {}
}

export const getAllNft = publicKey => async dispatch => {
  try {
    dispatch(getAllNftFetching())
    const response = await cryptoService.getAllNft(publicKey)
    const {ok, data, errors} = getCryptoResponse(response)
    if (ok) {
      dispatch(getAllNftSuccses(data))
    } else {
      dispatch(getAllNftError(errors))
    }
  } catch (e) {}
}

export const createNft = form => async dispatch => {
  try {
    const response = await cryptoService.createNft(form)
    const {ok, data, errors} = getCryptoResponse(response)
    return {ok, errors}
  } catch (e) {}
}
