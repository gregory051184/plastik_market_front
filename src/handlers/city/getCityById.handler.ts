import axios from "axios";

export const getCityByIdHandler = async (cityId: number) => {
    try {
        const city = await axios.get(`https://raw-market.ru/api/cities/${cityId}`);
        if(city?.data && city.status === 200) {
            return city.data;
        }
    } catch (error) {

    }
}