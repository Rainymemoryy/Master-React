import Login from 'src/pages/Auth/Login/Login'
import http from 'src/untils/http'

const authApi = {
    register(data) {
        return http.post('register', data)
    },
    login(data) {
        return http.post('login', data)
    }
}

export default authApi
