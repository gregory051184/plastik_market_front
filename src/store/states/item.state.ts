import {ItemStateInterface} from "../../interfaces";

export const itemState: ItemStateInterface = {
    item: {
        id: 0,
        title: '',
        image: '',
        additionalImages: [],
        description: '',
        price: 0,
        forSale: false,
        forBuying: false,
        //isMachine: false,
        owner: '',
        sold: false,
        unitOfMeasurement: '',
        city: {},
        advertisementId: {},
        category: {},
        subCategory: {},
        cartId: {},
        buyerId: {},
        createdAt: {},
        updatedAt: {}
    },

    items: [],

    itemsFilter: {
        title: '',
        price: '',
        city: '',
        category: 0,
        forSale: false
    }
}