import api from '../http'

const groupService = {
  createGroup: form => api.post('/group/create', form),
  editGroup: form => api.post('/group/edit', form),
  getAllGroups: () => api.get(`/group/getAllGroupInfos`),
}

export default groupService
