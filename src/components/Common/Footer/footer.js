import './footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__row">
                    <div className="footer__column">
                        <h3>Pages</h3>
                        <a href="/">Home</a>
                        <a href="/blog">Blogs</a>
                        <a href="/project/1">Projects</a>
                    </div>
                    <div className="footer__column">
                        <h3>Contact</h3>
                        <a href="/">Discord</a>
                        <a href="/">Github</a>
                        <a href="/">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer__initials">
                <p>DevLog</p>
                <p>Copyright @Montek 2022</p>
            </div>
        </div>
    )
}