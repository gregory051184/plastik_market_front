import axios from "axios";


export const getAllCitiesHandler = async () => {
    try {
        const cities = await axios.get(`https://raw-market.ru/api/cities/all`)
        if (cities) {
            return cities.data
        }
    } catch (error) {
    }
}