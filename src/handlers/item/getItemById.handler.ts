import axios from "axios";

export const getItemByIdHandler = async (itemId: number) => {
    try {
        const item = await axios.get(`https://raw-market.ru/api/items/${itemId}`);
        if (item) {
            return item.data;
        }
    } catch (error) {
    }
}