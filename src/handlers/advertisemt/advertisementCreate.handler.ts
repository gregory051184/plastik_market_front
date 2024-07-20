import {AdvertisementCreateInterface} from "../../interfaces";
import axios from "axios";

export const advertisementCreateHandler = async (advertisementCreateInterface: AdvertisementCreateInterface) => {
    console.log(advertisementCreateInterface)
    try{
        const advertisement = await axios.post('http://127.0.0.1:5000/api/advertisements',
            {...advertisementCreateInterface},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        if(advertisement) {
            return advertisement.data
        }
    }catch (error) {}
}