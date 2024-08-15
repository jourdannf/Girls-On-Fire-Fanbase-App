import { useEffect, useState } from "react";

import { Link} from "react-router-dom";
import Container from "react-bootstrap/Container"
import { ListGroup } from "react-bootstrap";
import VideoGrid from "../components/VideoGrid.jsx";
import ContestantsFilterTab from "../components/ContestantsFilterTab"

import rounds from "../data/performances.js"
import funcs from "../utils/performances.js"

export default function PerformancesPage (){
    // [rounds, setRounds] = useState(9);
    const [performances, setPerformances] = useState([]);
    const [filteredPerformances, setFilteredPerformances] = useState([]);

    useEffect(() => {
        funcs.getPerformances()
            .then(results => {
                setPerformances(results.data);
                setFilteredPerformances(results.data);
            })
    }, []);

    const updatedFilteredPerformances = performances => setFilteredPerformances(performances);

    return(
        <div>
            <h1 className="text-center ">Performances Page</h1>
            <div>
                <Container>
                <ListGroup horizontal>
                {
                    rounds.map((rd)=> {
                        return (
                        
                            <ListGroup.Item action key={rd.number} as={Link} to="`/performances/round/${rd.number}`">
                                <h3>Round {rd.number}: {rd.name}</h3>  
                            </ListGroup.Item>)
                    })                
                }
                </ListGroup>
                </Container>
            </div>
            
            <ContestantsFilterTab updatePerformances={updatedFilteredPerformances} />
            <VideoGrid performances={filteredPerformances} />
            
            
        </div>
    );
}