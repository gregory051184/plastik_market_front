import axios from "axios";

export const getSubscribeByIdHandler = async (subscribeId: number) => {
    try {
        const subscribe = await axios.get(`https://raw-market.ru/api/subscribes/${subscribeId}`);
        if (subscribe.data && subscribe.status === 200) {
            return subscribe.data;
        }
    } catch (error) {
    }
}