import {SubscribeUpdateInterface} from "../../interfaces";
import axios from "axios";

export const subscribeUpdateHandler = async (subscribeUpdateInterface: SubscribeUpdateInterface, chatId: string) => {
    try{
        const subscribe = await axios.patch(`http://127.0.0.1:5000/api/subscribes/${chatId}`,
            {...subscribeUpdateInterface},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        if(subscribe) {
            return subscribe.data
        }
    }catch (error) {}

}