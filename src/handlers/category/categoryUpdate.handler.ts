import {CategoryUpdateInterface} from "../../interfaces";
import axios from "axios";

export const categoryUpdateHandler = async (categoryUpdateInterface: CategoryUpdateInterface) => {
    try{
        const category = await axios.patch('https://raw-market.ru/api/categories',
            {...categoryUpdateInterface},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        if(category) {
            return category.data
        }
    }catch (error) {}

}