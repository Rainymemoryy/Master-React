import http from 'src/untils/http'
const URL = 'products'

const productApi = {
    getProducts(config) {
        return http.get(URL, config)
    }
}

export default productApi
