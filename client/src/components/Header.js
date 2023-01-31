import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <nav className="header-nav">
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header