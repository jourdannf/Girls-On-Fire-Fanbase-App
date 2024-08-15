import { useEffect, useState } from "react";

import NavBar from "./NavBar";
import getUserByID from "../utils/users";

export default function Header ({id}) {
    const [pfpLink, setLink] = useState("");
    const [nickname, setNickname] = useState("");

    useEffect(()=> {
        getUserByID(id)
            .then(user => {
                console.log(user.data)
                setNickname(user.data.nickname);
            })
    }, [id])
    
    return(
        <div style={{display: "flex"}}>
            <img src="" alt="" />
            <NavBar />
            <a href={`/user/${id}`}><img src={pfpLink} alt={`Profile picture of ${nickname}`} /></a>
        </div>
    );
}