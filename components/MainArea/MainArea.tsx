import React, { useState, useEffect } from 'react';
import styles from './MainArea.module.css';

// Props の型定義
interface MainAreaProps {
    currentSection: string;
}

const images = [
    "tsxImage1.png",
    "tsxImage2.png",
    "cssImage.png",
];

const MainArea: React.FC<MainAreaProps> = ({ currentSection }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);    
    }, []);

    return (
        <section className={styles.mainArea}>
            <div className={styles.scrollable}>
            {currentSection === 'about' && (
                <div>
                    <h1>About Me</h1>
                    <p className={styles.text}>
                        ご覧いただきありがとうございます。
                    </p>
                    <p className={styles.text}>
                        Next.js+TypeScriptで作成したページになります。
                    </p>
                    <div>
                        <p className={styles.text}>
                            webサイト、HP、webアプリケーション制作、
                        </p>
                        <p className={styles.text}>
                            デバイスにオリジナルのアプリケーション制作、導入の実績があります。
                        </p>
                        <p className={styles.text}>
                            WordPressでのブログサイト運営、動画編集、Canva+バナー制作も可能業務です。
                        </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <div
                            className={styles.imageSlider}
                            style={{
                                transform: `translateX(-${currentImageIndex * 100}%)`,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                        >
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className={styles.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {currentSection === 'projects' && (
                <div className={styles.projects}>
                    <h1>経歴</h1>
                    <p className={styles.text}>簡単ではありますが、次のような経歴があります</p><br />
                    <ul className={styles.list}>
                        <li className={styles.listItem}>上場企業電子部品の製品収率30%⇒70%に向上させる</li>
                        <li className={styles.listItem}>運送業にて既存顧客から新規流通の開拓により売上全体比6%向上</li>
                        <li className={styles.listItem}>2016~2018年日本車パーツ専門事業を立上げ（現在は保有していません）</li>
                        <li className={styles.listItem}>2019年WordPressブログサイト8カ月SEO1~5位維持</li>
                        <li className={styles.listItem}>2020年~現在、90%主夫に</li>
                    </ul>                   
                </div>
            )}
            {currentSection === 'contact' && (
                <div>
                    <h1>Talk</h1>
                    <p className={styles.text}>
                        社会的実績は平社員レベルです。
                    </p><br />
                    <p className={styles.text}>
                        私自身、特別なスキル、特有のスキルはありませんし、<br />
                        できることで何かしらの貢献に繋げることを信条としています。
                    </p><br />
                    <p className={styles.text}>
                        探求心の強さは、唯一認める優秀なポイントとして、お伝えしましょう。
                    </p><br />
                    <p className={styles.text}>
                        形而下を基準としますが、形而上の体験もあるため、<br />
                        一般的とは違った視点でクリエイティブな発想も強みとしています。
                    </p><br />
                    <p className={styles.text}>
                        身勝手ながら、このポートフォリオをご覧になる方は居ないと思ってるのが本音。
                    </p><br />
                    <p className={styles.text}>
                        クラウドソーシングで仕事を受注するために、どのようなスキルが必要なのか？
                    </p>
                    <p className={styles.text}>
                        どのようにアプローチすると良いか？
                    </p>
                    <p className={styles.text}>
                        内向的である自分をどのようにプロデュースすれば良いか？
                    </p><br />
                    <p className={styles.text}>
                        常に思案しつつ、アクションできない私がここにいます。
                    </p><br />
                    <p className={styles.text}>
                        ご覧になられた方には、（コイツ大丈夫か？）と思わせてしまうことも事実。
                    </p><br />
                    <p className={styles.text}>
                        安心してください！そして、以下の動画をご覧になって決めて頂きたいと思います！
                    </p>
                </div>
            )}
            </div>
        </section>
    );
};

export default MainArea;