import "../src/animation.css"

export default function WinnersTab ({hidden, animate}) {
    //hidden class when it loads and when it's already open
    //open class when it's hidden

    return (
        <div id="winners-tab" className={animate ? (hidden ? "hidden" : "reveal"): ""} style={{position: "relative", border: "green solid 1px", height: "50px"}}>
            <p>This is the Winners Tab</p>
        </div>
    );
}