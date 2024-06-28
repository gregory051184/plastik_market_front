import axios from "axios";

export const getCategoryByIdHandler = async (categoryId: number) => {
    try {
        const category = await axios.get(`http://127.0.0.1:5001/api/categories/${categoryId}`);
        if(category?.data && category.status === 200) {
            return category.data;
        }
    } catch (error) {

    }
}