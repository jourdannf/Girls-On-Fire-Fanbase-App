import axios from "axios"

const getUserByID = (id) => {
    return axios.get(`http://localhost:3000/users/${id}`);
}

export default getUserByID;