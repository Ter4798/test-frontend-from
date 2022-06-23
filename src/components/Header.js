import React from "react";
import "./Header.css";
import {Navbar,Nav,Container,} from 'react-bootstrap'
// import {BsFillFileEarmarkPostFill } from "react-icons/bs";
import {NavLink} from "react-router-dom"

const header = () => {
  // const users = [
  //   {
  //     id: 1,
  //     name: "ter",
  //     skill: [{ name: "python", level: 8 }],
  //     interests: ["song", "anime"],
  //   },
  // ];

  return (
    <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
      <NavLink className="navbar-brand" to ="/" exact>
      <img
          alt=""
          src="/logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} ReactForm
      </NavLink>
      {/* <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand> */}

  {/* <Navbar.Brand href="#home">ReactForm</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

    </Nav>
    <NavLink className="nav-link text-white" to ="/" exact>
     Add Form
    </NavLink> 
    <NavLink className="nav-link text-white" to ="/formData" exact>
     Form Data
    </NavLink>       
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};

export default header;
