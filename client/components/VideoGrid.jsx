import Video from "./Video"

export default function VideoGrid ({performances}) {
    return (
        <div style={{display: "flex"}}>
            {performances.map(performance => {
                return <Video key={performance._id} link={performance.link} />
            })}
            
        </div>
    )
}