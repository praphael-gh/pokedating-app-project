import React from "react";
import { NavLink } from "react-router-dom"  

import Header from "./Header";

function NavBar() {
    const linkStyles = {
        display:"inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "red",
        textDecoration: "none",
        color: "white",
    }
    return (
        <>
        <Header/>
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
            background: "red",
        }}
        >
            Home
        </NavLink>
        <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
            background: "red",
        }}
        >
            About
        </NavLink>
        <NavLink
        to="/catalog"
        exact
        style={linkStyles}
        activeStyle={{
            background:"red",
        }}
        >
            Catalog
        </NavLink>
        <NavLink
        to="/newform"
        exact
        style={linkStyles}
        activeStyle={{
            background: "red",
        }}
        >
            New Form
        </NavLink>
        </>
    )
}

export default NavBar;