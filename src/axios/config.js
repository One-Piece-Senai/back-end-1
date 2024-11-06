import axios from "axios"

const urlFetch = axios.create({
    baseURL: 'http://localhost:8080/usuario',
    headers: {
        "Content-Type":"application/json",
    },
});

export default urlFetch;