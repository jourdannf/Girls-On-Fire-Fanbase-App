import Card from "react-bootstrap/Card"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../src/App.css"
import funcs from "../utils/users"


export default function ContestantsCard ({contestant}) {
    const [clicked, setClicked] = useState({});
    const [liked, setLiked] = useState(false);
    const id = useParams();
    
    useEffect(() => {
        if (Object.keys(clicked).length == 0){
            return;
        }

        //Patch request not working, but this is supposed to add or remove a contestants from likes if they are liked on the screen

        // const person = new Map();

        // person.set("img", contestant.img);
        // person.set("name", contestant.name);

        // if(liked){
        //     funcs.toggleFavContestants(person, id)
        //         .then(p => {
        //             console.log(`${p} has been added to favorites.`)
        //         })
        //         .catch(e => {
        //             console.log(e)
        //         });
        // }else if (!liked) {
        //     funcs.toggleFavContestants(person, id)
        //         .then(p => {
        //             console.log(`${p} has been removed from favorites.`)
        //         })
        //         .catch(e => {
        //             console.log(e)
        //         });
        //     setClicked({});
        // }
    },[liked]);

    function handleClick(e) {
        console.log(contestant);
        //Get the parent
        //Find the contestant
        //Add contestant to favorites
        setClicked(contestant);
        setLiked(!liked);
        //Update state for like
    }
    //Don't have time to style like button so I'm removing it
    return (
        // <div className="contestant-card-outer">
        //     <img className="contestant-card-img" src={contestant.img ? `../src/assets/${contestant.img}` : ""} alt={`Picture of ${contestant.name}`} />
        //     {/* <button className="like-button" onClick={handleClick} >
        //         <i className="bi bi-heart-fill"></i>
        //     </button> */}
        //     <p>{contestant.name}</p>
        // </div>
        <Card>
            <Card.Img className="contestant-card-img" src={contestant.img ? `../src/assets/${contestant.img}` : ""} alt={`Picture of ${contestant.name}`} /> 
            <Card.Title> {contestant.name}</Card.Title>
        </Card>
    );
}