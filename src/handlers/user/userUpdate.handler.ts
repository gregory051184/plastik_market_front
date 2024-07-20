import axios from "axios";
//@ts-ignore
import {UserUpdateInterface} from "../../interfaces";

export const userUpdateHandler = async (userUpdateInterface: UserUpdateInterface, chatId: string) => {
    try {
        const user = await axios.patch(`http://127.0.0.1:5000/api/users/${chatId}`,
            {...userUpdateInterface},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        if (user) {
            return user.data
        }
    } catch (error) {
    }

}