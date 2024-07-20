import axios from "axios";

export const getUserByIdHandler = async (userId: number) => {
    try {
        const user = await axios.get(`http://127.0.0.1:5000/api/users/${userId}`);
        if (user.data && user.status === 200) {
            return user.data;
        }
    } catch (error) {
    }
}