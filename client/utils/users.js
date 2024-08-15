import axios from "axios"

const getUserByID = (id) => {
    return axios.get(`http://localhost:3000/users/${id}`);
}

const getFavContestants = (id) => {
    return axios.get(`http://localhost:3000/users/${id}/favorites/contestants`)
}

export default {getUserByID, getFavContestants};