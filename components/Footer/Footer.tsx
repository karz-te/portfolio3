import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
    comment: string;
}

const Footer: React.FC<FooterProps> = ({ comment }) => {
    return (
        <footer className={styles.footer}>
            <h4 className={styles.comment}>{comment}</h4>
            <video className={styles.video} controls>
                <source src="/portfolio3.mp4" type="video/mp4" />
            </video>
        </footer>
        
    );
};

export default Footer;