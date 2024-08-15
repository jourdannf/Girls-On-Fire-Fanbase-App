import axios from "axios";

const getPerformancesByRd = (num) => {
    return axios.get(`https://girls-on-fire-fanbase-app.onrender.com/performances/round/${num}`);
}

const getPerformances = () => {
    return axios.get("https://girls-on-fire-fanbase-app.onrender.com/performances")
}

const getFilteredPerformances = (paramsArr) => {
    return axios.get("https://girls-on-fire-fanbase-app.onrender.com/performances", {
        params: {
            contestant: paramsArr
        },
        paramsSerializer: {
            indexes: null
        }
    })
}

export default {getPerformancesByRd, getPerformances, getFilteredPerformances};