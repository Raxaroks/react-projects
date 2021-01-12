import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                
                <Link to='/' className="navbar-brand">Aprendiendo ReactJS: useContext</Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName='active' to="/" className="nav-link active" >Home</NavLink>
                        <NavLink exact activeClassName='active' to="/about" className="nav-link" >About</NavLink>
                        <NavLink exact activeClassName='active' to="/login" className="nav-link" >Login</NavLink>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;
