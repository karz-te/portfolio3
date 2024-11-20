import { useState } from 'react';
import Header from '../components/Header/Header';
import MainArea from '../components/MainArea/MainArea';
import Footer from '../components/Footer/Footer';
import styles from './Home.module.css';


export default function Home(): JSX.Element {
    // 状態の型を定義
    const [currentSection, setCurrentSection] = useState('about');

    return (

        <div className={styles.container}>
            <Header 
                setCurrentSection={setCurrentSection}
            />
            <MainArea
                currentSection={currentSection}
            />
            <Footer comment ="何卒よろしくお願い申し上げます。"/>
        </div>

    );
}