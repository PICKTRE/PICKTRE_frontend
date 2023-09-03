import axios from "axios";
import { BASE_URL } from "../constants/url";

const cameraReward = async (memberId, trashName, reward) => {
    try {
        const response = await axios.post(`${BASE_URL}/trash`,
            { memberId, trashName, reward },
            );

        return response.data;
    } catch (error) {
        console.error(error);
        alert(error.response.data);
        throw new Error(error.response.data.message);
    }
};

export default cameraReward;
