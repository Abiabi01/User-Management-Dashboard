import axios from "axios";

const api = axios.create({
    baseURL:"https://reqres.in/api",
    headers:{
        "x-api-key":import.meta.env.VITE_REQRES_API_KEY
    }
}
)
    export default api