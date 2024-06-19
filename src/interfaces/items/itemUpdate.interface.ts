export interface ItemUpdateInterface {
    id: number;
    title?: string;
    image?: string;
    file?: any,
    additionalImages?: string[];
    description?: string;
    price?: number;
    forSale?: boolean;
    forBuying?: boolean;
    //isMachine: boolean;
    owner?: string;
    sold?: boolean;
    unitOfMeasurement?: any;
    city?: number;
    advertisement?: number;
    category?: number;
    subCategory?: number;
}