import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setCurrentSection }) => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <button
                    className={styles.navItem}
                    onClick={() => setCurrentSection('about')}
                >
                    自己紹介
                </button>
                <button
                    className={styles.navItem}
                    onClick={() => setCurrentSection('projects')}
                >
                    経歴
                </button>
                <button
                    className={styles.navItem}
                    onClick={() => setCurrentSection('contact')}
                >
                    Talk
                </button>
            </nav>
        </header>
    );
};

export default Header;