import axios from "axios";

export const getAdvertisementByIdHandler = async (advertisementId: number) => {
    try {
        const advertisement = await axios.get(`http://127.0.0.1:5000/api/advertisements/${advertisementId}`);
        if (advertisement.data && advertisement.status === 200) {
            return advertisement.data;
        }
    } catch (error) {
    }
}