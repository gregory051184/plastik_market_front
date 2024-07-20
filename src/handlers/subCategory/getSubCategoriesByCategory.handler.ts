import axios from "axios";

export const getSubCategoriesByCategoryHandler = async (categoryId: number) => {
    try {
        const categories = await axios.get(`http://127.0.0.1:5000/api/subcategories/category/${categoryId}`)
        if (categories) {
            return categories.data
        }
    } catch (error) {
    }
}