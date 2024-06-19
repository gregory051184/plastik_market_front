import {SubscribeUpdateInterface} from "../../interfaces";
import axios from "axios";

export const subscribeUpdateHandler = async (subscribeUpdateInterface: SubscribeUpdateInterface) => {
    try{
        const subscribe = await axios.patch('https://raw-market.ru/api/items',
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