import axios from "axios"
const options = {
    params: {
        type: "multi",
     
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_SECRET_KEY,
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    },
}

const BASE_URL = 'https://spotify23.p.rapidapi.com'
export const ApiService = {
    async fetching(url) {
        const res = await axios.get(`${BASE_URL}${url}`, options)
        return res.data;
    }
}