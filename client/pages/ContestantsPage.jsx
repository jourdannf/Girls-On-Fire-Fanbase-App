import { useEffect, useState } from "react"
import ContestantsCard from "../components/ContestantsCard"
import getContestants from "../utils/contestants"
import ContestantsGrid from "../components/ContestantsGrid"
import WinnersTab from "../components/WinnersTab"
import "../src/animation.css"

export default function ContestantsPage () {
    const [winners, setWinners] = useState([]);
    const [losers, setLosers] = useState([]);
    const [filteredLosers, setFilteredLosers] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [hidden, setHidden] = useState(true);
    const [animate, setAnimate] = useState(false);
    
    useEffect(()=> {
        getContestants()
            .then(contestants => {
                console.log(contestants);
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

    function handleClick (e) {
        if (!animate) {
            setAnimate(!animate);
        }
        setHidden(!hidden);
    }

    return (
        
        <>
            <div id="outer" className= {animate ? (hidden ? "hidden" : "reveal") : ""} style={{height: "100px"}}>
                <img id="group-pic" src="../src/assets/group-picture.jpg" alt="Picture of winning group" style={{height: "400px", border: "blue 1px solid"}} onClick={handleClick} />
                <WinnersTab hidden={hidden} animate={animate} winners={winners} />
            </div>
            
            <br />
            <input type="text" placeholder="Search for contestant" onChange={handleSearchInputChange} />
            <ContestantsGrid losers={filteredLosers} />
        </>
    )
}