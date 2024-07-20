import {CategoryUpdateInterface} from "../../interfaces";
import axios from "axios";

export const categoryUpdateHandler = async (categoryUpdateInterface: CategoryUpdateInterface, chatId: string) => {
    try{
        const category = await axios.patch(`http://127.0.0.1:5000/api/categories/${chatId}`,
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