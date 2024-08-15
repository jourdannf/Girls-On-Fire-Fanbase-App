import { useEffect, useState, useRef, forwardRef } from "react";

import ContestantsCard from "./ContestantsCard";
import getContestants from "../utils/contestants";
import funcs from "../utils/performances"
import ContestantsFilterTabItem from "./ContestantsFilterTabItem";
import Container from "react-bootstrap/Container"
import "../src/App.css"



export default function ContestantsFilterTab ({updatePerformances}) {
    const [contestants, setContestants] = useState([])
    const [clicked, setClicked] = useState([]);
    const [unclicked, setUnclicked] = useState("");
    const tabItemRef = useRef(null);
    
    //Set Up Initial Data
    useEffect(() => {
        getContestants()
            .then(contestantsArr => {
                // console.log(contestantsArr)
                setContestants(contestantsArr.data);
            })
    }, [])

    //Update Filtered Items
    useEffect(() => {
        funcs.getFilteredPerformances(clicked)
            .then(performances => {
                console.log("Filtered FUnc")
                console.log(performances)
                updatePerformances(performances.data);
            })
    }, [clicked])

    if (contestants.length == 0) {
        console.log("Here")
        return;
    }

    function handleClick(e) {
        //Get Info About Contestant Clicked
        //Add Info To Array
        //Updated Clicked will trigger useEffect which will updatePerformances to new filter
        console.log(tabItemRef.current);
    }
    //Didn't have time to implement useRef
    // function getMap(node) {

    // }

    // function setMap(node){
    //     const map = getMap();

    //     if(node) {
    //         map.set(contestant.name, node)
    //     }
    // }
    
    return (
        <Container>
        <div style={{display: "flex"}}>
            {contestants.map(contestant => {
                return (
                <ContestantsFilterTabItem key={contestant._id} contestant={contestant} onClick={handleClick} ref={tabItemRef} />
                
            )
            })}
            
        </div>
        </Container>
    );
}