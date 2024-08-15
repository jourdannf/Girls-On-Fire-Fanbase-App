import axios from "axios";

const getContestants = () => {
    return axios.get(`https://girls-on-fire-fanbase-app.onrender.com/contestants`);
}

export default getContestants;