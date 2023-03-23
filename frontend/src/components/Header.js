import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbarStyle ={
    backgroundColor : 'lightblue'
};

function Header({title}){
    return(
        <Navbar style = {navbarStyle}>
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
};


export default Header;