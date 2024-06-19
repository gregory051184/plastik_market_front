export interface ItemStateInterface {
    item: {
        id: number;
        title: string;
        image: string;
        additionalImages?: string[];
        description: string;
        price: number;
        forSale?: boolean;
        forBuying?: boolean;
        //isMachine: boolean;
        owner: string;
        sold?: boolean;
        unitOfMeasurement: string;
        city: any;
        advertisementId?: any;
        category: any;
        subCategory: any;
        cartId?: any;
        buyerId?: any;
        createdAt?: any;
        updatedAt?: any;
    },

    items: any[],

    itemsFilter: {
        title?: string;
        price?: string;
        city?: string;
        category?: number;
        forSale: boolean;
    }

}