import { useState, useEffect, useRef, forwardRef } from "react"
import Card from "react-bootstrap/Card"

export default forwardRef(function ContestantsFilterTabItem ({contestant, onClick}, ref) {
    // const [clicked, setClicked] = useState([]);
    // const [unclicked, setUnclicked] = useState("");
    // const [filteredContestants, setFilteredContestants] = useState(contestant);

    // useEffect(() => {

    // }, [clicked])
    

    //Attempting to use ref to the get the information about the item clicked so that I could filter the performances, but didn't have time to fully imnplement useRef
    return (
        
        <div onClick={onClick} id={contestant.name} ref={ref}>
            
            <Card style={{width: "100px"}}>
                <Card.Img className="contestant-card-img" src={contestant.img ? `../src/assets/${contestant.img}` : ""} alt={`Picture of ${contestant.name}`} />
                <Card.Title> {contestant.name}</Card.Title>
            </Card>
        
        </div>

        
    )
})