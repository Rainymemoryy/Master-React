import { purchaseStatus } from 'src/constants/status'
import http from 'src/untils/http'
const URL = 'purchases'

const purchaseApi = {
    addToCart(data) {
        return http.post(`${URL}/add-to-cart`, data)
    },
    getCardPurchases() {
        return http.get(URL, {
            params: {
                status: purchaseStatus.inCard
            }
        })
    },
    updatePurchase(data) {
        return http.put(`${URL}/update-purchase`, data)
    }
}

export default purchaseApi
