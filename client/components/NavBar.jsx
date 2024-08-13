import { Link } from "react-router-dom";

export default function NavBar (){
    return (
        <div style={{display: "flex"}}>
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/contestants">
                <div>Contestants</div>
            </Link>
            <Link to="/performances">
                <div>Performances</div>
            </Link>
        </div>
    );
}