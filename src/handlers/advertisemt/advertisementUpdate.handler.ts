import {AdvertisementUpdateInterface} from "../../interfaces";
import axios from "axios";

export const advertisementUpdateHandler = async (advertisementUpdateInterface: AdvertisementUpdateInterface, chatId: string) => {
    try {
        const advertisement = await axios.patch(`http://127.0.0.1:5001/api/advertisements/${chatId}`,
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