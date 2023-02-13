import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Project Tracker</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Add a Project</Link>
                    </li>
                    <li>
                        <Link to='/my-projects'>All Projects</Link>
                    </li>
                    <li>
                        <Link to='/completed-projects'>Completed Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;