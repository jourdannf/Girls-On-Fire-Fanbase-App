import axios from "axios";

const getPerformancesByRd = (num) => {
    return axios.get(`http://localhost:3000/performances/round/${num}`);
}

export default getPerformancesByRd;