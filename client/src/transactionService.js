// makes request to route
// may not need
import axios from 'axios'

export default {
    getAll(){
        return axios.get('/api/transactions/').then(response =>{
            return response.data
        })
    },
    // sends a patch request that will be handled by the route in transactions.js
    setVisited(stateName, visited){
        return axios.patch('/api/state/' + stateName, { visited: visited}).then(response => {
            return response.data
        })
    },
    getOne(stateName){
        return axios.get('/api/states/' + stateName).then(response =>{
            return response.data
        })
    }

}