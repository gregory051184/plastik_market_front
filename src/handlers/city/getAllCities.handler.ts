import axios from "axios";


export const getAllCitiesHandler = async () => {
    try {
        const cities = await axios.get(`http://127.0.0.1:5001/api/cities/all`)
        if (cities) {
            return cities.data
        }
    } catch (error) {
    }
}