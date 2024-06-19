export interface AdvertisementStateInterface {
    advertisement: {
        id: number;
        title: string;
        price: number;
        description: string;
        startDate: string;
        finishDate: string;
        createdAt?: any;
        updatedAt?: any;
    },

    advertisements: any[]
}