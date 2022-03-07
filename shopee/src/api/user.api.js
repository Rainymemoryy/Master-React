import http from 'src/untils/http'
const URL = 'user'
const userApi = {
    updateMe(data) {
        return http.put(`${URL}`, data)
    }
}

export default userApi
