import axios from "axios";

export const getSubCategoryByIdHandler = async (subCategoryId: number) => {
    try {
        const subCategory = await axios.get(`http://127.0.0.1:5000/api/subcategories/${subCategoryId}`)
        if (subCategory?.data && subCategory.status === 200) {
            return subCategory.data
        }
    } catch (error) {

    }
}