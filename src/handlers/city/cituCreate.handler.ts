import {CityCreateInterface} from "../../interfaces";
import axios from "axios";

export const cityCreateHandler = async (cityCreateInterface: CityCreateInterface) => {
    try{
        const city = await axios.post('https://raw-market.ru/api/cities',
            {...cityCreateInterface},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        if(city) {
            return city.data
        }
    }catch (error) {}
}