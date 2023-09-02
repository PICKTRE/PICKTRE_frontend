import axios from "axios";
import { BASE_URL } from "../constants/url";

const showProfile = async () => {
    try {
        const msrl = localStorage.getItem('memberId');
        const response = await axios.get(
            `${BASE_URL}/members/${msrl}`,
        );

        return response.data;
    } catch (error) {
        console.error(error);
        alert(error.response.data);
        throw new Error(error.response.data.message);
    }
};

export default showProfile;
