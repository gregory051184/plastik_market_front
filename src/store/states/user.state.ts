import {UserStateInterface} from "../../interfaces";

export const userState: UserStateInterface = {
    user: {
        id: 0,
        chatId: '',
        isBot: false,
        firstName: '',
        username: '',
        admin: false,
        banned: false,
        contactPerson: '',
        phone: '',
        email: '',
        address: '',
        subscribe: {},
        createdAt: {},
        updatedAt: {}
    },

    users: []
}