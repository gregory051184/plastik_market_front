import axios from "axios";

export const checkFileHandler = async (title: string, owner: string, file: string) => {
    try {
        const check = await axios.get('http://127.0.0.1:5000/api/items/check/file', {
            params: {
                title: title,
                owner: owner,
                file: file
            }
        })
        if (check) {
            return check
        }
    } catch (error) {
    }
}