import axios from "axios";

export const getUserByChatIdHandler = async (chatId: string) => {
    try {
        const user = await axios.get(`http://127.0.0.1:5000/api/users/chat/${chatId}`);
        if (user.data && user.status === 200) {
            return user.data;
        }
    } catch (error) {
    }
}