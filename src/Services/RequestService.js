import axios from "axios";

const RequestService = axios.create({
    baseURL: process.env.REACT_APP_baseUrl || "http://127.0.0.1:5000",
});

export default RequestService;