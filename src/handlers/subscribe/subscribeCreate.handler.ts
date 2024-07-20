import {SubscribeCreateInterface} from "../../interfaces";
import axios from "axios";

export const subscribeCreateHandler = async (subscribeCreateInterface: SubscribeCreateInterface) => {
    try{
        const subscribe = await axios.post('http://127.0.0.1:5000/api/subscribes',
            {...subscribeCreateInterface},
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