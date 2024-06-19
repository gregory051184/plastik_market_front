import {SubCategoryUpdateInterface} from "../../interfaces";
import axios from "axios";

export const subCategoryUpdateHandler = async (subCategoryUpdateInterface: SubCategoryUpdateInterface) => {
    try {
        const subCategory = await axios.patch('https://raw-market.ru/api/subcategories',
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