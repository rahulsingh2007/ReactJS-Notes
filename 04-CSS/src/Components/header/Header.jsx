import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <h3>Rahul Singh</h3>
            <button className={styles.btn}>LogIn</button>
        </div>
    );
};

export default Header;
