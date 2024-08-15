import axios from "axios";

const getPerformancesByRd = (num) => {
    return axios.get(`http://localhost:3000/performances/round/${num}`);
}

const getPerformances = () => {
    return axios.get("http://localhost:3000/performances")
}

const getFilteredPerformances = (paramsArr) => {
    return axios.get("http://localhost:3000/performances", {
        params: {
            contestant: paramsArr
        },
        paramsSerializer: {
            indexes: null
        }
    })
}

export default {getPerformancesByRd, getPerformances, getFilteredPerformances};