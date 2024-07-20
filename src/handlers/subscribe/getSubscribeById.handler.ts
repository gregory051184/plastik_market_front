import axios from "axios";

export const getSubscribeByIdHandler = async (subscribeId: number) => {
    try {
        const subscribe = await axios.get(`http://127.0.0.1:5000/api/subscribes/${subscribeId}`);
        if (subscribe.data && subscribe.status === 200) {
            return subscribe.data;
        }
    } catch (error) {
    }
}