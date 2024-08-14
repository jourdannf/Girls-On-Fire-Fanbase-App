import axios from "axios";

const getContestants = () => {
    return axios.get(`http://localhost:3000/contestants`);
}

export default getContestants;