import { useEffect, useState } from "react"
import ContestantsCard from "../components/ContestantsCard"
import getContestants from "../utils/contestants"
import ContestantsGrid from "../components/ContestantsGrid"

export default function ContestantsPage () {
    const [winners, setWinners] = useState([]);
    const [losers, setLosers] = useState([]);
    const [filteredLosers, setFilteredLosers] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
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
                setFilteredLosers(losingContestants);

            });
    },[])
    
    // return (
    //     <div>
    //         <h1>ContestantsPage</h1>
    //         {losers.map(contestant => {
    //             return <ContestantsCard key={contestant._id} contestant={contestant} />
    //         })}
            
    //     </div>
    // )

    function handleSearchInputChange (e){
        const result = losers.filter(person => {
            if (e.target.value == "") return losers;
            return person.name.toLowerCase().includes(e.target.value.toLowerCase());
        });

        setFilteredLosers(result);
    }

    return (
        
        <>
            <img src="" alt="Picture of winning group" />
            <br />
            <input type="text" placeholder="Search for contestant" onChange={handleSearchInputChange} />
            <ContestantsGrid losers={filteredLosers} />
        </>
    )
}