import {CityUpdateInterface} from "../../interfaces";
import axios from "axios";

export const cityUpdateHandler = async (cityUpdateInterface: CityUpdateInterface) => {
    try{
        const city = await axios.patch('https://raw-market.ru/api/cities',
            {...cityUpdateInterface},
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