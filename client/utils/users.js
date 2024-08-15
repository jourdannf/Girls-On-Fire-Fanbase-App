import axios from "axios"

const getUserByID = (id) => {
    return axios.get(`http://localhost:3000/users/${id}`);
}

const getFavContestants = (id) => {
    return axios.get(`http://localhost:3000/users/${id}/favorites/contestants`)
}

const toggleFavContestants = (person, id) => {
    return axios.patch(`http://localhost:3000/users/${id}/favorites/contestants`, {
        contestant: person
    })
}

export default {getUserByID, getFavContestants, toggleFavContestants};