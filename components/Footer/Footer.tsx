import React from 'react';
import styles from './Footer.module.css';
import getConfig from 'next/config';

interface FooterProps {
    comment: string;
}

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig?.basePath || '';

const Footer: React.FC<FooterProps> = ({ comment }) => {
    return (
        <footer className={styles.footer}>
            <h4 className={styles.comment}>{comment}</h4>
            <video className={styles.video} controls>
                <source src={`${basePath}/portfolio3.mp4`} type="video/mp4" />
            </video>
        </footer>
        
    );
};

export default Footer;