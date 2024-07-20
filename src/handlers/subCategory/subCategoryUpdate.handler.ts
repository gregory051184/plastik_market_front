import {SubCategoryUpdateInterface} from "../../interfaces";
import axios from "axios";

export const subCategoryUpdateHandler = async (subCategoryUpdateInterface: SubCategoryUpdateInterface, chatId: string) => {
    try {
        const subCategory = await axios.patch(`http://127.0.0.1:5000/api/subcategories/${chatId}`,
            {...subCategoryUpdateInterface},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        if(subCategory) {
            return subCategory
        }
    }catch (error) {}
}