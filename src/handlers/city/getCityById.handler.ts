import axios from "axios";

export const getCityByIdHandler = async (cityId: number) => {
    try {
        const city = await axios.get(`http://127.0.0.1:5001/api/cities/${cityId}`);
        if(city?.data && city.status === 200) {
            return city.data;
        }
    } catch (error) {

    }
}