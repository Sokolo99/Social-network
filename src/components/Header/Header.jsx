import styles from './Header.module.css';
import SelectUser from "../SelectUser/SelectUser.jsx";

function Header() {
    return (
        <>
            <img className={styles.logo} src='/public/Personal Journal.svg' alt='Logo'/>
            <SelectUser/>
        </>
    )
}

export default Header;