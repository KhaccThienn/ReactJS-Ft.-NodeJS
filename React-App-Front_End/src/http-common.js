/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
const cookies = document.cookie.split('token=')[1];

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Authorization": `Bearer ${cookies}`
    }
});

export default axiosInstance;