import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Paper from '@material-ui/core/Paper';

export function Header() {
    return (
        <Paper elevation={5}>
            <div>
                <nav className="navbar">
                    <a className="navbar-brand mx-auto" href="/">
                        <span>UW-Madison Course Search</span>
                    </a>
                </nav>
            </div>
        </Paper>
    )
}