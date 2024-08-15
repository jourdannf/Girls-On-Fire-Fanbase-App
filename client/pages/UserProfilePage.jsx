import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import Profile from "../components/Profile.jsx"
import FavoritesSection from "../components/FavoritesSection.jsx"
import funcs from "../utils/users.js"

export default function UserProfilePage (){
    const [user, setUser] = useState({});
    const [contestants, setContestants] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        funcs.getUserByID(id)
            .then(user => {
                // console.log("In Use Effect")
                // console.log(user.data.favorites.contestants)
                setUser(user.data);
            })
    }, [id]);

    useEffect(() => {
        funcs.getFavContestants(id)
            .then(people => {
                setContestants(people.data);
            })
    }, [id])


    return (
        <>
            {console.log(contestants)}
            <Profile name={user.nickname} />
            <FavoritesSection contestants={contestants} />
        </>
    )
}