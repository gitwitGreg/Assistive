import React from "react";
import '../components/Navbar.css'
import '../components/Button.css'
import { Link} from "react-router-dom";


const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'button--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize)? buttonSize : SIZES[0];

    return(
        <Link to='/home' className="btn-mobile">
            <button className={`btn ${checkButtonStyle}${checkButtonSize}`} onClick={onclick} type={type}
            >
                {children}
            </button>
        </Link>
    )
} 