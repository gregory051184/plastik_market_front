import {SubCategoryCreateInterface} from "../../interfaces";
import axios from "axios";

export const subCategoryCreateHandler = async (subCategoryCreateInterface: SubCategoryCreateInterface) => {
    try {
        const subCategory = await axios.post('https://raw-market.ru/api/subcategories',
            {...subCategoryCreateInterface},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        if(subCategory) {
            return subCategory.data
        }
    }catch (error) {}
}