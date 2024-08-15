import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import funcs from "../utils/performances"

import Video from "../components/Video"

export default function PerformancesRoundPage() {
    const {num} = useParams();
    const [performances, setPerformances] = useState([]);

    //Gets all the Performances for the specific round
    useEffect(() => {
        funcs.getPerformancesByRd(num)
            .then(stages => {
                return setPerformances(stages.data)
            })
    }, [])

    //Get YouTube video info for the embed

    return (
        <div>
            {
            performances.map((p) => {
                // console.log(p.link)
                return (<Video link={p.link} />);
            })
            }
        </div>
    )
}