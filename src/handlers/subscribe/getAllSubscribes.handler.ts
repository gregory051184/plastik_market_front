import axios from "axios";

export const getAllSubscribesHandler = async () => {
    try {
        const subscribes = await axios.get('https://raw-market.ru/api/subscribes/all')
        if (subscribes) {
            return subscribes.data
        }
    } catch (error) {
    }
}