import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Paper from '@material-ui/core/Paper';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    icon: {
      color: "#f7f7f7",
      fontSize: "200%",
    }
  });

export function Header() {
    const classes = useStyles();

    return (
        <Paper elevation={5}>
            <div>
                <nav className="navbar">
                    <a className="ms-3" href="/">
                        <HomeIcon className={classes.icon}/>
                    </a>
                    <a className="navbar-brand mx-auto" href="/">
                        <span>UW-Madison Course Search</span>
                    </a>
                    <a className="me-3" href="/">
                        <FavoriteIcon className={classes.icon} />
                    </a>
                </nav>
            </div>
        </Paper>
    )
}