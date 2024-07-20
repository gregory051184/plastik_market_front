import axios from "axios";

export const getItemByIdHandler = async (itemId: number) => {
    try {
        const item = await axios.get(`http://127.0.0.1:5000/api/items/${itemId}`);
        if (item) {
            return item.data;
        }
    } catch (error) {
    }
}