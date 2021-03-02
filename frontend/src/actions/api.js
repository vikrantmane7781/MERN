import axios from 'axios'
const baseUrl = 'http://localhost:1000/'

export default {
    postMessage(url = baseUrl + 'm/') {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id),
            fetchById: (id) => axios.get(url + id)
        }
    }
}