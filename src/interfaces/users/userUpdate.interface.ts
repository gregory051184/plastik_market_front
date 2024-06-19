export interface UserUpdateInterface {
    id: number;
    firstName?: string;
    username?: string;
    admin?: boolean;
    banned?: boolean;
    contactPerson?: string;
    phone?: string;
    email?: string;
    address?: string;
    subscribe?: any;
}