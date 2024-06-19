import {UserUpdateInterface} from "../../interfaces";
import axios from "axios";

export const userUpdateHandler = async (userUpdateInterface: UserUpdateInterface) => {
    try{
        const user = await axios.patch('https://raw-market.ru/api/users',
            {...userUpdateInterface},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        if(user) {
            return user.data
        }
    }catch (error) {}

}