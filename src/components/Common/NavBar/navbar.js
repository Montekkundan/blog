import './navbar.css'
import {MdDarkMode} from "react-icons/md";
import {BsSun} from "react-icons/bs";
import {useState} from "react";
import {color} from "three/nodes";
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
    // let icon = <BsFillSunFill/>


    let selectedIcon;
    selectedIcon = getCurrentTheme() !== 'dark';
    const [icon, setIcon] = useState(selectedIcon);
    themeButton = () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        setIcon((current) => !current);
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
    }

    return <nav className="navbar">
        <h1><a href="/" className="navbar__title">Blog</a></h1>
        <ul>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/">More</a>
            </li>
            <li>
                <button onClick={themeButton} title="Theme" className="toggle__theme"> {icon ?<MdDarkMode className="dark__icon"/> : <BsSun className="light__icon" />}</button>
            </li>
        </ul>
    </nav>
}