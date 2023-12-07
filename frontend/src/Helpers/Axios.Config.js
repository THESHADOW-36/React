import axios from "axios";

const api = axios.create({baseURL:"https://backend-eebv.onrender.com/api/v1"})

export default api;