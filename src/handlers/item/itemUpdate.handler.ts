
import axios from "axios";
import {ItemUpdateInterface} from "../../interfaces";

export const itemUpdateHandler = async (itemUpdateDto: ItemUpdateInterface) => {
    try {
        const fileForm = new FormData();
        fileForm.append('file', itemUpdateDto.file)
        const item = await axios.patch('http://127.0.0.1:5000/api/items',
            {...itemUpdateDto},
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                    //'Content-Type': 'application/octet-stream'
                }
            })
        if (item) {
            return item.data
        }
    } catch (error) {
    }

}