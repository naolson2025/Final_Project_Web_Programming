// makes request to route
import axios from 'axios'

export default {
    getAll(){
        return axios.get('/api/transactions/').then(response =>{
            return response.data
        })
    },
    // sends a patch request that will be handled by the route in transactions.js
    addIncomeTransaction(transaction){
        return axios.post('/api/transaction/', transaction).then(response => {
            return response.data
        })
    },
}