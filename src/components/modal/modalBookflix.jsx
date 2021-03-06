import React from 'react';
import { useEffect } from 'react';
import styles from './modal.module.css'

const ModalBookflix = ({setModalList, divRef}) => {

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
                    <h1 className={styles.content_title}>BookFlix</h1>
                </div>
                    <h3>Netflix์ฌ์ดํธ๋ฅผ ์ฐธ๊ณ ํ์ฌ๋ง๋  ์ฑ์ ์ฃผ์ ๋กํ ์ฌ์ดํธ</h3>
                    <div className={styles.content_box}>
                        <h2>๐Summary</h2>
                    <p>
                    Vue.js ํ๋ ์์ํฌ๋ฅผ ํตํด์ ์ ์ํ์ต๋๋ค. <br/><br/>
                    ๋ฐ์ดํฐ๋ฅผ Vuex์ ์ ์ฅํ๊ณ  VueRouter ํ์ฉํ์ฌ ์ ์ํ์ต๋๋ค.<br/>
                    ๋น์ Api, Firebase ๋ฑ์ ํ์ตํ๊ธฐ ์ด์ ์ด๋ผ ๋ง์ ๊ธฐ๋ฅ์ ๊ตฌํํ์ง ๋ชปํ์ง๋ง,,<br/>
                    ์ถํ์ Firebase๋ก ๋ก๊ทธ์ธ๊ธฐ๋ฅ์ ์ถ๊ฐํ๊ณ  ์น API๋ฅผ ์ฌ์ฉํด ๊ฐ์ ํ ์์ ์๋๋ค.

                    <li><span className={styles.point}>Home </span>Vuex์ ์ ์ฅ๋ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ ์ฌ๋ผ์ด๋๋ก ๋ณด์ฌ์ค๋๋ค.</li>
                    <li><span className={styles.point}>๊ฒ์</span>์ค์  ๊ฒ์๊ธฐ๋ฅ์ ๋์ง์์ง๋ง ๊ฒ์์ด๊ฐ ์๋์ ์ฅ๋ฉ๋๋ค.</li>
                    <li><span className={styles.point}>๋ด์์ฌ</span>Homeํ๋ฉด์์ '๋ด์์ฌ์ ๋ด๊ธฐ'๋ฅผ ๋๋ฅธ ๋์๋ฅผ ๋ณผ ์์์ต๋๋ค.</li>
                    </p>
                    </div>

                    <div className={styles.content_box}>
                        <h2>๐ฅ๏ธ์์ธ ๋ด์ฉ</h2>
                        <li>์นํฉ์ ํ์ฉํ์ฌ ํ๋ก์ ํธ๋ฅผ ์งํํ์ต๋๋ค.</li>
                        <li>HTML๊ตฌ์กฐ๋ฅผ ์ดํดํ๊ณ  CSS์์์ ์งํํ์ต๋๋ค.</li>
                        <li>VueRouter ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํ์ฉํ์ต๋๋ค.</li>
                        <li>Vuex๋ฅผ ์ฌ์ฉํ์ฌ ๋ฐ์ดํฐ ์ํ๊ด๋ฆฌ๋ฅผ ํ์ต๋๋ค.</li>
                    </div>

                    <div className={styles.content_box}>
                        <h2>โ๏ธTechnology Stacks</h2>
                        <img alt="badge" src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=Vue.js&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
                    </div>
                    
            </div>
        </article>
    );
};

export default ModalBookflix;