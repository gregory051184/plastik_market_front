export interface SubscribeStateInterface {
    subscribe: {
        id: number;
        title: string;
        price: number;
        description: string;
        months: number;
        itemsNumber: number;
        createdAt?: any;
        updatedAt?: any;
    },
    subscribes: any[]
}