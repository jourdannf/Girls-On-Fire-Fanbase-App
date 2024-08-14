import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import getPerformancesByRd from "../utils/performances"

import Video from "../components/Video"

export default function PerformancesRoundPage() {
    const {num} = useParams();
    const [performances, setPerformances] = useState([]);

    //Gets all the Performances for the specific round
    useEffect(() => {
        getPerformancesByRd(num)
            .then(stages => {
                return setPerformances(stages.data)
            })
    }, [])

    //Get YouTube video info for the embed

    return (
        <div>
            {
            performances.map((p) => {
                return (<Video link={p.link} />);
            })
            }
        </div>
    )
}