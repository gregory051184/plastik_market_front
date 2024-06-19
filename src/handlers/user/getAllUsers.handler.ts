import axios from "axios";

export const getAllUsersHandler = async () => {
    try {
        const users = await axios.get('https://raw-market.ru/api/users/all')
        if (users) {
            return users.data
        }
    } catch (error) {
    }
}