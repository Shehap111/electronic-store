import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {

    const setDark_mode = () => {
    document.querySelector("body").setAttribute("data-theme","Dark")
}    
    const setLight_mode = () => {
    document.querySelector("body").setAttribute("data-theme","Light")
    
} 
    const ToggleTheme = (e) => {
        if (e.target.checked) {
            setDark_mode()
        } else {
            setLight_mode()
        }
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={ToggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
