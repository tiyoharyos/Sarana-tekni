import {Navbar, Container, Nav, NavbarBrand, NavLink} from "react-bootstrap" 


import { Link } from 'react-router-dom';
const NavBar = () =>{
    return(
       <div>
        <Navbar variant="dark" bg="dark" >
            <Container>
                <NavbarBrand>
                    Nyolo Pilem
                </NavbarBrand>
                <Nav>
                    <NavLink as={Link} to ="/">Home</NavLink>
                    <NavLink as={Link} to ="/About">About</NavLink>
                    <NavLink as={Link} to ="/Trending">Trending Hero</NavLink>
                </Nav>
            </Container>
        </Navbar>
       </div>
    )
}

export default NavBar