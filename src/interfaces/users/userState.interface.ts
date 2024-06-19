export interface UserStateInterface {
    user: {
        id: number;
        chatId: string;
        isBot: boolean;
        firstName: string;
        username: string;
        admin?: boolean;
        banned?: boolean;
        contactPerson?: string;
        phone?: string;
        email?: string;
        address?: string;
        //cart?: any;
        subscribe?: any;
        createdAt?: any;
        updatedAt?: any;
    },
    users: any[]
}