import { useState, useEffect, useRef, forwardRef } from "react"

export default forwardRef(function ContestantsFilterTabItem ({contestant, onClick}, ref) {
    // const [clicked, setClicked] = useState([]);
    // const [unclicked, setUnclicked] = useState("");
    // const [filteredContestants, setFilteredContestants] = useState(contestant);

    // useEffect(() => {

    // }, [clicked])
    
    return (
        <div onClick={onClick} id={contestant.name} ref={ref}>
            <div className="rounded-div">
                <img className="filter-tab-item" src={contestant.img ? `../src/assets/${contestant.img}` : ""} alt={`Picture of ${contestant.name}`} />
            </div>
            <p>{contestant.name}</p>
        </div>
    )
})