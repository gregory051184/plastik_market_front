import axios from "axios";

export const getAllAdvertisementsHandler = async () => {
    try {
        const advertisements = await axios.get('https://raw-market.ru/api/advertisements/all')
        if (advertisements) {
            return advertisements.data
        }
    } catch (error) {
    }
}