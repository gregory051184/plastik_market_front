import {CityUpdateInterface} from "../../interfaces";
import axios from "axios";

export const cityUpdateHandler = async (cityUpdateInterface: CityUpdateInterface, chatId: string) => {
    try{
        const city = await axios.patch(`http://127.0.0.1:5001/api/cities/${chatId}`,
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