import Video from "./Video"
import Container from "react-bootstrap/Container"

export default function VideoGrid ({performances}) {
    return (
        <Container>
        <div style={{display: "flex"}}>
            {performances.map(performance => {
                return <Video key={performance._id} link={performance.link} />
            })}
            
        </div>
        </Container>
    )
}