import {AdvertisementUpdateInterface} from "../../interfaces";
import axios from "axios";

export const advertisementUpdateHandler = async (advertisementUpdateInterface: AdvertisementUpdateInterface) => {
    try {
        const advertisement = await axios.patch('https://raw-market.ru/api/advertisementes',
            {...advertisementUpdateInterface},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        if (advertisement) {
            return advertisement.data
        }
    } catch (error) {
    }
}