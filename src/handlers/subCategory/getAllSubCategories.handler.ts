import axios from "axios";

export const getAllSubCategoriesHandler = async () => {
    try {
        const categories = await axios.get('https://raw-market.ru/api/subcategories/all')
        if (categories) {
            return categories.data
        }
    } catch (error) {
    }
}