import api from '../http'

const walletService = {
  sendMatic: form => api.post('/wallet/sendMaticAsync', form),
  sendRuble: form => api.post('/wallet/sendRubleAsync', form),
  sendNft: form => api.post('/wallet/sendNftAsync', form),
}

export default walletService
