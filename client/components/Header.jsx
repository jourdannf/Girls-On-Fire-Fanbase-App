import NavBar from "./NavBar";

export default function Header (props) {
    return(
        <div style={{display: "flex"}}>
            <img src="" alt="" />
            <NavBar />
            <img src={props.pfpLink} alt={`Profile picture of ${props.nickname}`} />
        </div>
    );
}