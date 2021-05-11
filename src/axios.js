import axios from 'axios'

const base_url = "http://127.0.0.1:8000/api/"

const axiosInstance = axios.create({
    baseURL: base_url,
   
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        
       
    },


})

export default axiosInstance