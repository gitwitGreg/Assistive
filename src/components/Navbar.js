import React, { useEffect } from "react";
import { useState } from "react";
import { Routes ,Route, Link } from 'react-router-dom'
import { Button } from "../components/Button";
import '../components/Navbar.css'

function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =()=> setClick();
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
    };

    useEffect(()=>{
        showButton()
    },[]);
    window.addEventListener("resize", showButton);
    return(
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        Asistive <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                    <ul className={click? 'nav-menu active': 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/athletic' className="nav-links" onClick={closeMobileMenu}>
                            Athletic
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/alumni' className="nav-links" onClick={closeMobileMenu}>
                            Alumni
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/academic' className="nav-links" onClick={closeMobileMenu}>
                            Academic
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/student' className="nav-links" onClick={closeMobileMenu}>
                            Student
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/community' className="nav-links-mobile" onClick={closeMobileMenu}>
                            Log in
                        </Link>
                    </li>
                    </ul>
                    {button && <Button buttonStyle= 'btn--outline'>home</Button>}
                </div>
            </nav>
    );
}
export default Navbar