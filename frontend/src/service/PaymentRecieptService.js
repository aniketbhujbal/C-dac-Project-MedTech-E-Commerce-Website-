import axios from 'axios';


class PaymentRecieptService {
    constructor() {
        this.baseUrl = "http://localhost:8080/"
    }
    getReciptInfo(){
        const userName = sessionStorage.getItem("user_details")
        return axios.get(this.baseUrl+"orderdetails/"+userName)
    }

}
export default new PaymentRecieptService();