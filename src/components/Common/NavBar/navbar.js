import './navbar.css'
import {AiOutlineBulb} from "react-icons/ai";
import {useEffect, useState} from "react";
export default function Navbar() {
    const darkTheme = 'dark-theme'

// Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')

// We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

// We validate if the user previously chose a topic
    if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    }

// Activate / deactivate the theme manually with the button
    let themeButton;
    themeButton = () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
    }
    const handleOnClick = (e) => {
        console.log(localStorage.getItem('selected-theme'))
        const checked = e.target.checked;
        if (checked) {
            document.body.classList.remove("dark-theme")
            document.body.classList.add("light-theme")
        } else {
            document.body.classList.remove("light-theme")
            document.body.classList.add("dark-theme")
        }
        localStorage.setItem('selected-theme', getCurrentTheme())
    }
    const check = (theme) => {
        return localStorage.getItem('selected-theme') !== 'dark';
    }

    return <nav className="navbar">
        <h1><a href="/" className="navbar__title">Blog</a></h1>
        <ul>
            <li>
                {/*change theme button */}
                {/*<label className="toggle__label">*/}
                {/*    <input type="checkbox" checked={check() } onClick={(e) => {*/}
                {/*        handleOnClick(e);*/}
                {/*    }}/>*/}
                {/*    <span>*/}
                {/*        <AiOutlineBulb className="toggle__img"/>*/}
                {/*    </span>*/}
                {/*</label>*/}
                <button onClick={themeButton} title="Theme" id="theme-button" >Dark/Light</button>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/">More</a>
            </li>
        </ul>
    </nav>
}