import axios from "axios";

export const getAllAdvertisementsHandler = async () => {
    try {
        const advertisements = await axios.get('http://127.0.0.1:5000/api/advertisements/all')
        if (advertisements) {
            return advertisements.data
        }
    } catch (error) {
    }
}