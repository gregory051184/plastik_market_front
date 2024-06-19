import axios from "axios";

export const getAllItemsHandler = async () => {
    try {
        const items = await axios.get('https://raw-market.ru/api/items/all')
        if (items) {
            return items.data
        }
    } catch (error) {
    }
}