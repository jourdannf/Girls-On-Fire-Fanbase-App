import { useEffect, useState } from "react";

import { Link} from "react-router-dom";
import DirectoryCard from "../components/DirectoryCard";
import VideoGrid from "../components/VideoGrid.jsx";

import rounds from "../data/performances.js"
import funcs from "../utils/performances.js"

export default function PerformancesPage (){
    // [rounds, setRounds] = useState(9);
    const [performances, setPerformances] = useState([]);

    useEffect(() => {
        funcs.getPerformances()
            .then(results => {
                setPerformances(results.data);
            })
    }, []);

    return(
        <div>
            <h1>Performances Page</h1>
            <div>
                {
                    rounds.map((rd)=> {
                        return <Link key={rd.number} to={`/performances/round/${rd.number}`}><DirectoryCard name={rd.name} num={rd.number} /></Link>
                    })                
                }
            </div>
            
            <VideoGrid performances={performances} />
            
            
        </div>
    );
}