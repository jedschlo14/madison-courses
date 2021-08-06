import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export function Header() {
    return (
        <body>
            <nav className="navbar">
                <a className="navbar-brand mx-auto" href="/">
                    <span>UW-Madison Course Search</span>
                </a>
            </nav>
        </body>
    )
}