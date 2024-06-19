import {CategoryCreateInterface} from "../../interfaces";
import axios from "axios";

export const categoryCreateHandler = async (categoryDto: CategoryCreateInterface) => {
    try{
        const category = await axios.post('https://raw-market.ru/api/categories',
            {...categoryDto,},
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