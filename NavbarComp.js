import React, {useState, useEffect} from "react";
import {Navbar, Nav, Container, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";



const NavbarComp = () => {
    const [changeColor, setChangeColor] = useState(false);
    
    const changeBackgroundColor = () => {
        if(window.scrollY>680){
            setChangeColor(true);
        }else{
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBackgroundColor();
        window.addEventListener("scroll", changeBackgroundColor);

    });
   return(
    
    <div className="sticky-top">
        
        <Navbar variant="dark" expand="lg" className={changeColor ? "color-active" : ""}>
            
            <Container>
                <Navbar.Brand href="#home">SMKN 1 Bangkinang</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className="mx-2">Beranda</Nav.Link>
                    <Nav.Link href="#galeri" className="mx-2">Galeri</Nav.Link>
                    <Nav.Link href="#service" className="mx-2">Layanan</Nav.Link>
                    <Nav.Link href="#jurusan" className="mx-2">FAQs</Nav.Link>
                </Nav>
                </Navbar.Collapse>

                
            </Container>
        </Navbar>
    </div>
   )
}

export default NavbarComp;