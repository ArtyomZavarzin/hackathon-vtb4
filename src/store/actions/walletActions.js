import walletService from '../../services/walletService'
import getResponse from '../../utils/getResponse'

export const sendMatic = form => async dispatch => {
  try {
    const response = await walletService.sendMatic(form)

    const {ok, data, errors} = getResponse(response)

    return {ok, errors}
  } catch (e) {}
}

export const sendRuble = form => async dispatch => {
  try {
    const response = await walletService.sendRuble(form)

    const {ok, data, errors} = getResponse(response)

    return {ok, errors}
  } catch (e) {}
}

export const sendNft = form => async dispatch => {
  try {
    const response = await walletService.sendNft(form)

    const {ok, data, errors} = getResponse(response)

    return {ok, errors}
  } catch (e) {}
}
