import './navbar.css'
export default function Navbar() {
    return <nav className="navbar">
        <a href="/" className="navbar__title">Blog</a>
        <ul>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/">More</a>
            </li>
        </ul>
    </nav>
}