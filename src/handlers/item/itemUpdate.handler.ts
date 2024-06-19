import {ItemUpdateInterface} from "../../interfaces";
import axios from "axios";

export const itemUpdateHandler = async (itemUpdateDto: ItemUpdateInterface) => {
    console.log(itemUpdateDto)
    try {
        const fileForm = new FormData();
        fileForm.append('file', itemUpdateDto.file)
        const item = await axios.patch('https://raw-market.ru/api/items',
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