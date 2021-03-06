import React from 'react';
import { useEffect } from 'react';
import styles from './modal.module.css'

const ModalPortfolio = ({setModalList, divRef}) => {

    const onclickClose = () => {
        setModalList(null)
        document.body.style.overflowY = "scroll";
    }

     //๐๋ค๋ฅธ๊ณณ ํด๋ฆญํ๋ฉด ๋ฉ๋ด์ฐฝ ์์ด์ง
    const clickEvent = ()=> {
        setModalList(null)
        document.body.style.overflowY = "scroll";
    }


    useEffect(()=>{
        divRef.current !==undefined && divRef.current.addEventListener('click', clickEvent);
    })

    return (
        <article>
            <div className={styles.overlay}></div>
            <div role='dialog' aria-modal='true' className={styles.modal}>
            <div className={styles.bar}>
                <h1 className={styles.bar_title}>README.md</h1>
                <button 
                className={styles.closeButton}
                onClick={onclickClose}
                >X</button>
            </div>
                <div className={styles.line}>
                    <h1 className={styles.content_title}>PortFolio Site</h1>
                </div>
                    <h3>ํฌํธํด๋ฆฌ์ค ์ฉ๋๋ก ์ ์ํ ์ฌ์ดํธ</h3>
                    <div className={styles.content_box}>
                        <h2>๐Summary</h2>
                    <p>
                    ํ์ฌ ๋ณด๊ณ ์๋ ์ฌ์ดํธ๋ก, React๋ฅผ ํ์ฉํด์ SPA์ฌ์ดํธ๋ฅผ ์ ์ํ์ต๋๋ค.<br/><br/>
                    ํฌํธํด๋ฆฌ์ค ์ฌ์ดํธ๋ฅผ ๋์ ์ผ๋ก ์ ์ํ๋ฉด์, <br/>CSS์ Animation๊ณผ 
                    ReactHooks์ ๋ํด ๊น์ด ๊ณต๋ถํด๋ณผ์์์์ต๋๋ค.
                    ์์ผ๋ก ๊ณ์ํด์ React๋ฅผ ๊ณต๋ถํ๋ฉด์ Dark Mode๋ฑ์ ๊ธฐ๋ฅ์ ์ถ๊ฐํ  ์์ ์๋๋ค.<br/><br/>

                    <li><span className={styles.point}>Home </span>์ฌ์ดํธ์ ๊ฐ์ฅ ์ฒซ ํ๋ฉด์๋๋ค</li>
                    <li><span className={styles.point}>About</span>์ ์ ๋ํ ์ ๋ณด๋ฅผ ์นด๋ํ์์ผ๋ก ๋์์ธํ์ต๋๋ค </li>
                    <li><span className={styles.point}>Skills</span>๊ธฐ์ ์คํ ํ์ฉ์์น๋ฅผ Progress Bar๋ก ํํํ๊ณ  ์ฌ์ฉ๊ฐ๋ฅํ ๊ธฐ์ ์คํ๋ค์ ์์ด์ฝ์ผ๋ก ๋ณด์ฌ์ค๋๋ค</li>
                    <li><span className={styles.point}>MyWorks</span> ์งํํ๋ ํ๋ก์ ํธ๋ค์ ์ฌ๋ผ์ด๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํ์ฉํด์ ์ ์ํ์ต๋๋ค</li>
                    <li><span className={styles.point}>Contact</span>์ฐ๋ฝ์ฒ ์ ๋ณด๋ฅผ ๋ณผ์์๋ ํ์ด์ง์๋๋ค.</li>
                    </p>
                    </div>

                    <div className={styles.content_box}>
                        <h2>๐ฅ๏ธ์์ธ ๋ด์ฉ</h2>
                        <li>Reactํจ์ํ ์ปดํฌ๋ํธ๋ก ์ ์ํ์ต๋๋ค.</li>
                        <li>UseEffect, useRef, forwardRef๋ฑ๊ณผ ๊ฐ์ ReactHooks๋ฅผ ์ฌ์ฉํ์ต๋๋ค</li>
                        <li>React Confati๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํ์ฉํด์ text ํธ๋ฒ์ ์ ๋๋ฉ์ด์์ ์ ์ฉํ์ต๋๋ค.</li>
                        <li>Scroll ๋์ด๋ฅผ ๊ฐ์งํ์ฌ nav ํด๋ฆญ์ ํด๋น ์์น๋ก ์ด๋ํฉ๋๋ค.</li>
                        <li>๊ฐ๋จํ ์ ๋๋ฉ์ด์๋ค์ ์ง์  ๋ง๋ค์ด ์ ์ฉํ์ต๋๋ค.</li>
                        <li>JavaScript์ Observer๋ฅผ ํ์ฉํด์ ์ ํด์ง ์คํฌ๋กค์์น์ ์ด๋ํ์ ๋, Progress Bar๊ฐ ์์ง์๋๋ค</li>
                        <li>Modal์ฐฝ์ ์ง์  ๋ง๋ค์ด ์์ธ์ค๋ช์ด ํ์ํ MyWorks๋ถ๋ถ์ ์ ์ฉํ์ต๋๋ค.</li>
                        <li>React Keen-Slider ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํ์ฉํ์ต๋๋ค.</li>

                    </div>

                    <div className={styles.content_box}>
                        <h2>โ๏ธTechnology Stacks</h2>
                        <img alt="badge" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
                    </div>
                    
            </div>
        </article>
    );
};

export default ModalPortfolio;