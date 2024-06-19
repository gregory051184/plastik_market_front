import {ItemsFilterInterface} from "../../interfaces/items/itemsFilter.interface";
import axios from "axios";

export const itemsFilterHandler = async (filter: ItemsFilterInterface) => {
    try {
        const items = await axios.get('https://raw-market.ru/api/items/filters', {
            params: {filter}
        })
        if (items) {
            return items.data
        }
    } catch (error) {

    }
}