import axios from "axios";

export const getSubCategoryByIdHandler = async (subCategoryId: number) => {
    try {
        const subCategory = await axios.get(`https://raw-market.ru/api/subcategories/${subCategoryId}`)
        if (subCategory?.data && subCategory.status === 200) {
            return subCategory.data
        }
    } catch (error) {

    }
}