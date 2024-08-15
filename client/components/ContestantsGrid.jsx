import { useEffect, useState } from "react"
import ContestantsCard from "../components/ContestantsCard"
import getContestants from "../utils/contestants"
import "../src/App.css"

export default function ContestantsGrid ({losers}) {

    
    return (
        <div style={{display: "flex"}}>
            {losers.map(contestant => {
                return (<ContestantsCard key={contestant._id} contestant={contestant} /> )
            })}
            
            
        </div>
    );
}