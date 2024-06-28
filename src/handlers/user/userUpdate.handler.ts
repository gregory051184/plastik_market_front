import {UserUpdateInterface} from "../../interfaces";
import axios from "axios";

export const userUpdateHandler = async (userUpdateInterface: UserUpdateInterface) => {
    try{
        const user = await axios.patch('http://127.0.0.1:5001/api/users',
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