import axios from "axios";
const API_URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";


export const options = {
    method: "POST",
    mode: "cors",
}
export const instance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + "fc34a6b27fc270e70216ac8acf988a8b6452afc9"
    }
})

