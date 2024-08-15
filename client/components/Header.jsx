import NavBar from "./NavBar";

export default function Header (props) {
    return(
        <div style={{display: "flex"}}>
            <img src="" alt="" />
            <NavBar />
            <a href="/user/:id"><img src={props.pfpLink} alt={`Profile picture of ${props.nickname}`} /></a>
        </div>
    );
}