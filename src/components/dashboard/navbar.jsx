import styles from './navbar.module.css';
import Button from '@mui/material/Button';

const Navbar = () =>{
    return <div className={styles.navbar}>
        <div id="logo">
            Logo
        </div>
        <div className={styles.authentication}>

            <div className="signup">
                <Button variant="outlined">Log In</Button>
            </div>
            <div className="login">
                <Button variant="outlined">Sign In</Button>
            </div>
        </div>
    </div>
}

export default Navbar;