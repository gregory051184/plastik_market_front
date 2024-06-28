import {SubCategoryCreateInterface} from "../../interfaces";
import axios from "axios";

export const subCategoryCreateHandler = async (subCategoryCreateInterface: SubCategoryCreateInterface) => {
    try {
        const subCategory = await axios.post('http://127.0.0.1:5001/api/subcategories',
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