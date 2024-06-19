import axios from "axios";

export const getSubCategoriesByCategoryHandler = async (categoryId: number) => {
    try {
        const categories = await axios.get(`https://raw-market.ru/api/subcategories/category/${categoryId}`)
        if (categories) {
            return categories.data
        }
    } catch (error) {
    }
}