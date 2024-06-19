export interface ItemCreateInterface {
    title: string;
    image: string;
    file: any,
    additionalImages?: string[];
    description: string;
    price: number;
    forSale?: boolean;
    forBuying?: boolean;
    //isMachine: boolean;
    owner: string;
    sold?: boolean;
    unitOfMeasurement: string;
    cityId: number;
    //advertisementId?: number;
    categoryId: number;
    subCategoryId: number;
}