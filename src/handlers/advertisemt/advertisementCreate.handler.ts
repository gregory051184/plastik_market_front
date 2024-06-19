import {AdvertisementCreateInterface} from "../../interfaces";
import axios from "axios";

export const advertisementCreateHandler = async (advertisementCreateInterface: AdvertisementCreateInterface) => {
    try{
        const advertisement = await axios.post('https://raw-market.ru/api/advertisementes',
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