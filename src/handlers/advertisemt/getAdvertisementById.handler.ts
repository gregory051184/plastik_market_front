import axios from "axios";

export const getAdvertisementByIdHandler = async (advertisementId: number) => {
    try {
        const advertisement = await axios.get(`https://raw-market.ru/api/advertisements/${advertisementId}`);
        if (advertisement.data && advertisement.status === 200) {
            return advertisement.data;
        }
    } catch (error) {
    }
}