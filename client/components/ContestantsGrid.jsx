import { useEffect, useState } from "react"
import ContestantsCard from "../components/ContestantsCard"
import getContestants from "../utils/contestants"

export default function ContestantsGrid () {
    const [winners, setWinners] = useState([]);
    const [losers, setLosers] = useState([]);
    
    useEffect(()=> {
        getContestants()
            .then(contestants => {
                const data = contestants.data;
                const winningContestants = [];
                const losingContestants = [];
                data.forEach(contestant => {
                    const results = contestant.results;
                    const name = contestant.name;
                    results.forEach(result => {
                        if (result.showTitle != "Girls On Fire"){
                            return;
                        }

                        if (result.finalEp.winner == true){
                            winningContestants.push(contestant);
                        }else {
                            losingContestants.push(contestant);
                        }
                    })
                });

                setWinners(winningContestants);
                setLosers(losingContestants);

            });
    },[])
    
    return (
        <div style={{display: "flex"}}>
            {losers.map(contestant => {
                return <ContestantsCard key={contestant._id} contestant={contestant} />
            })}
            
        </div>
    );
}