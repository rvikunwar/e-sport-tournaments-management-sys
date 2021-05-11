import axios from 'axios'

const base_url = "https://backkendd.herokuapp.com/api/"

const axiosInstance = axios.create({
    baseURL: base_url,
   
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        
       
    },


})

export default axiosInstance