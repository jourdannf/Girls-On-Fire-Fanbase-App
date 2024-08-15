import Video from "./Video"
import Container from "react-bootstrap/Container"

export default function VideoGrid ({performances}) {
    return (
        <>
        <div className="d-flex flex-wrap" style={{width: "2000px", margin: "auto"}}>
            {performances.map(performance => {
                return <Video key={performance._id} link={performance.link} style={{border: "1px black solid"}} />
            })}
            
        </div>
        </>
    )
}