import {CityCreateInterface} from "../../interfaces";
import axios from "axios";

export const cityCreateHandler = async (cityCreateInterface: CityCreateInterface) => {
    try{
        const city = await axios.post('http://127.0.0.1:5001/api/cities',
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