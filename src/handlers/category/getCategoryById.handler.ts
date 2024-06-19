import axios from "axios";

export const getCategoryByIdHandler = async (categoryId: number) => {
    try {
        const category = await axios.get(`https://raw-market.ru/api/categories/${categoryId}`);
        if(category?.data && category.status === 200) {
            return category.data;
        }
    } catch (error) {

    }
}