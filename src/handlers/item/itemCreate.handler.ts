import {ItemCreateInterface} from "../../interfaces";
import axios from "axios";

export const itemCreateHandler = async (itemDto: ItemCreateInterface) => {
    try {
        const fileForm = new FormData();
        fileForm.append('file', itemDto.file)
        fileForm.append('title', itemDto.title)
        fileForm.append('description', itemDto.description)
        fileForm.append('image', itemDto.image)
        fileForm.append('forSale', `${itemDto.forSale}`)
        fileForm.append('forBuying', `${itemDto.forBuying}`)
        fileForm.append('owner', itemDto.owner)
        fileForm.append('unitOfMeasurement', itemDto.unitOfMeasurement)
        fileForm.append('sold', `${itemDto.sold}`)
        fileForm.append('subCategoryId', itemDto.subCategoryId.toString())
        fileForm.append('categoryId', itemDto.categoryId.toString())
        fileForm.append('price', itemDto.price.toString())
        fileForm.append('cityId', itemDto.cityId.toString())
        const item = await axios.post('https://raw-market.ru/api/items',
            //{itemDto, fileForm},
            {...itemDto},
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