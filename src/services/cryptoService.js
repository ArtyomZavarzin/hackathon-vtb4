import api, {cryptoApi} from '../http'

const cryptoService = {
  getBalance: publicKey => {
    return cryptoApi.get(`/v1/wallets/${publicKey}/balance`)
  },
  getAllNft: publicKey => {
    return cryptoApi.get(`/v1/wallets/${publicKey}/nft/balance`)
  },
  createNft: form => {
    return api.post(`/wallet/createNft`, form)
  },
}

export default cryptoService
