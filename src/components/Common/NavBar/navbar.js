import './navbar.css'
export default function Navbar() {
    let themeButton = document.getElementById('theme-button')
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
    themeButton = () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
    }
    return <nav className="navbar">
        <h1><a href="/" className="navbar__title">Blog</a></h1>
        <ul>
            <li>
                {/*change theme button */}
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