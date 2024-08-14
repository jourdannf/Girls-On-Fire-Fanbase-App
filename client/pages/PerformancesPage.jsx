import { useEffect, useState } from "react";

import { Link} from "react-router-dom";
import DirectoryCard from "../components/DirectoryCard";

import rounds from "../data/performances.js"

export default function PerformancesPage (){
    // [rounds, setRounds] = useState(9);

    return(
        <div>
            <h1>Performances Page</h1>
            {
                rounds.map((rd)=> {
                    return <Link key={rd.number} to={`/performances/round/${rd.number}`}><DirectoryCard name={rd.name} num={rd.number} /></Link>
                })
            }
        </div>
    );
}