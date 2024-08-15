import axios from "axios";

const getPerformancesByRd = (num) => {
    return axios.get(`http://localhost:3000/performances/round/${num}`);
}

const getPerformances = () => {
    return axios.get("http://localhost:3000/performances")
}

export default {getPerformancesByRd, getPerformances};