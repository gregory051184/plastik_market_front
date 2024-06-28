import axios from "axios";

export const getAllCategoriesHandler = async () => {
    try {
        const categories = await axios.get('http://127.0.0.1:5001/api/categories/all')
        if (categories) {
            return categories.data
        }
    } catch (error) {
    }
}