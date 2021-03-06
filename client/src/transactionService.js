// makes request to route
import axios from 'axios'

export default {
    getAll(){
        return axios.get('/api/transactions/').then(response =>{
            return response.data
        })
    },
    // sends a patch request that will be handled by the route in transactions.js
    addTransaction(transaction){
        return axios.post('/api/transaction/', transaction).then(response => {
            return response.data
        })
    },
    // sends delete request to transactions.js
    deleteTransaction(transaction){
        return axios.delete('/api/deleteTransaction', {params: transaction}).then(response =>{
            return response.data
        })
    },
    // delete all data in database
    deleteAll(type){
        return axios.delete('/api/deleteAll', {params: type}).then(response =>{
            return response.data
        })
    }
}