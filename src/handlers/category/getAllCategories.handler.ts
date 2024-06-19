import axios from "axios";

export const getAllCategoriesHandler = async () => {
    try {
        const categories = await axios.get('https://raw-market.ru/api/categories/all')
        if (categories) {
            return categories.data
        }
    } catch (error) {
    }
}