import './header.css'
import Type from "./type";
export default function Header() {
    return (
        <header className="home__header">
                <h1><Type children={['Learn', 'Grow', 'Share', 'Hello World!']}/></h1>
                <p>Hello</p>
        </header>
    )
}