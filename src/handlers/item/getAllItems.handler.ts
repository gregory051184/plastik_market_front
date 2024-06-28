import axios from "axios";

export const getAllItemsHandler = async () => {
    try {
        const items = await axios.get('http://127.0.0.1:5001/api/items/all')
        if (items) {
            return items.data
        }
    } catch (error) {
    }
}