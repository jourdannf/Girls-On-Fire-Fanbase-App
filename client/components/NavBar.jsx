import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar (){
    return (
        // <div style={{display: "flex"}}>
        //     <Link to="/">
        //         <div>Home</div>
        //     </Link>
        //     <Link to="/contestants">
        //         <div>Contestants</div>
        //     </Link>
        //     <Link to="/performances">
        //         <div>Performances</div>
        //     </Link>
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Girls On Fire Hub</Navbar.Brand>
                
                
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
                    <Nav.Item>
                        
                    </Nav.Item>
                    
                        
                </Nav>
                
            </Container>
            </Navbar>
        </>


        
    );
}