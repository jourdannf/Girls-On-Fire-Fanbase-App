import axios from "axios"

const getUserByID = (id) => {
    return axios.get(`https://girls-on-fire-fanbase-app.onrender.com/users/${id}`);
}

const getFavContestants = (id) => {
    return axios.get(`https://girls-on-fire-fanbase-app.onrender.com/users/${id}/favorites/contestants`)
}

const toggleFavContestants = (person, id) => {
    return axios.patch(`https://girls-on-fire-fanbase-app.onrender.com/users/${id}/favorites/contestants`, {
        contestant: person
    })
}

export default {getUserByID, getFavContestants, toggleFavContestants};