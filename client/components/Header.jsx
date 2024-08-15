import { useEffect, useState } from "react";

import NavBar from "./NavBar";
import funcs from "../utils/users";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header ({id}) {
    const [pfpLink, setLink] = useState("");
    const [nickname, setNickname] = useState("");

    useEffect(()=> {
        funcs.getUserByID(id)
            .then(user => {
                setNickname(user.data.nickname);
            })
    }, [id])
    
    return(
        <div style={{display: "flex"}}>
            <Navbar expand="lg" className="bg-body-tertiary flex-grow-1">
            <Container>
                <Navbar.Brand as={Link} to="/">Girls On Fire Hub</Navbar.Brand>
                
                
                <Nav className="me-auto">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/contestants">Contestants</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/performances">Performances</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Nav.Item className="ms-auto">
                        <a href={`/user/${id}`}><img src={pfpLink} alt={`Profile picture of ${nickname}`} /></a>
                </Nav.Item>
                
            </Container>
            </Navbar>
            
        </div>
    );
}