import axios from "axios";

export const getAllSubscribesHandler = async () => {
    try {
        const subscribes = await axios.get('http://127.0.0.1:5001/api/subscribes/all')
        if (subscribes) {
            return subscribes.data
        }
    } catch (error) {
    }
}