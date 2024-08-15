import "../src/animation.css"
import ContestantsCard from "./ContestantsCard";

export default function WinnersTab ({hidden, animate, winners}) {
    //hidden class when it loads and when it's already open
    //open class when it's hidden

    return (
        <div id="winners-tab" className={animate ? (hidden ? "hidden" : "reveal"): ""} style={{position: "relative", border: "green solid 1px", height: "150px", display:"flex"}}>
            {winners.map(w => {
                console.log(w);
                return <ContestantsCard contestant={w}/>                
            })}
        </div>
    );
}