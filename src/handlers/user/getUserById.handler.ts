import axios from "axios";

export const getUserByIdHandler = async (userId: number) => {
    try {
        const user = await axios.get(`https://raw-market.ru/api/users/${userId}`);
        if (user.data && user.status === 200) {
            return user.data;
        }
    } catch (error) {
    }
}