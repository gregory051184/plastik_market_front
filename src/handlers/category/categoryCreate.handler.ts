import {CategoryCreateInterface} from "../../interfaces";
import axios from "axios";

export const categoryCreateHandler = async (categoryDto: CategoryCreateInterface) => {
    try {
        const category = await axios.post(`http://127.0.0.1:5000/api/categories`,
            {...categoryDto,},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        if (category) {
            return category.data
        }
    } catch (error) {
    }
}