import axios from "axios";

export const getAllUsersHandler = async () => {
    try {
        const users = await axios.get('http://127.0.0.1:5001/api/users/all')
        if (users) {
            return users.data
        }
    } catch (error) {
    }
}