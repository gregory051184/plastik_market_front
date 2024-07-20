import axios from "axios";

export const getAllSubCategoriesHandler = async () => {
    try {
        const categories = await axios.get('http://127.0.0.1:5000/api/subcategories/all')
        if (categories) {
            return categories.data
        }
    } catch (error) {
    }
}