// import React, { Component } from "react";



function NavBar(){
    return(
        <div >
            <nav className="navbar d-flex justify-content-center navbar-light">
                <form className="d-flex flex-row ">
                    <input style={{width:400}} type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
           
        </div>
    )
}
export default NavBar;