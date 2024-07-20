import {ItemsFilterInterface} from "../../interfaces/items/itemsFilter.interface";
import axios from "axios";

export const itemsFilterHandler = async (filter: ItemsFilterInterface, chatId: string) => {
    try {
        const items = await axios.get(`http://127.0.0.1:5000/api/items/filters/${chatId}`, {
            params: {filter}
        })
        if (items) {
            return items.data
        }
    } catch (error) {

    }
}