import http from 'src/untils/http'

const authApi = {
    register(data) {
        return http.post('register', data)
    }
}

export default authApi
