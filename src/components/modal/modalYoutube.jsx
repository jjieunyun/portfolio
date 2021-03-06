import React from 'react';
import { useEffect } from 'react';
import styles from './modal.module.css'

const ModalYoutube = ({setModalList, divRef}) => {

    const onclickClose = () => {
        setModalList(null)
        document.body.style.overflowY = "scroll";
    }
    
     //๐๋ค๋ฅธ๊ณณ ํด๋ฆญํ๋ฉด ๋ฉ๋ด์ฐฝ ์์ด์ง
    const clickEvent = ()=> {
        setModalList(null);
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
                    <h1 className={styles.content_title}>Youtube Clone Coding</h1>
                </div>
                    <h3>Youtube API๋ฅผ ํ์ฉํด ์ค์๊ฐ ์์ ์คํธ๋ฆฌ๋ฐ์ด ๊ฐ๋ฅํ ํ์ด์ง</h3>
                    <div className={styles.content_box}>
                        <h2>๐Summary</h2>
                    <p>
                    React๋ฅผ ํ์ฉํ ์ฒซ๋ฒ์งธ ๊ฐ์ธํ๋ก์ ํธ์๋๋ค. <br/><br/>
                    ์ด์ ์ CSS์ JS๋ก ๊ฐ๋จํ๊ฒ ํ์ด์ง๋ฅผ ๋ง๋  ๊ฒฝํ์ ํ ๋๋ก <br/>
                    Youtube API๋ฅผ Axios๋ฅผ ํ์ฉํด ์ฌ์ดํธ๋ฅผ ๊ฐ์ ํ์ต๋๋ค.<br/>
                    ๊ฒ์๊ธฐ๋ฅ์ ๊ตฌํํ์ฌ ์์ ์ด ์ํ๋ ์์์ ์์ฒญํ  ์์์ต๋๋ค.
                    <br/><br/>

                    <li><span className={styles.point}>Home </span>Youtube์์ ์ ๊ณตํ๋ ์ธ๊ธฐ์์์ ๋ณผ ์์์ต๋๋ค.</li>
                    <li><span className={styles.point}>Search</span>๊ฒ์์ด๋ฅผ ์๋ ฅํ๋ฉด ์ํ๋ ์์์ ์์ฒญํ  ์์์ต๋๋ค. </li>
                    
                    </p>
                    </div>

                    <div className={styles.content_box}>
                        <h2>๐ฅ๏ธ์์ธ ๋ด์ฉ</h2>
                    
                        <li>Classํ ์ปดํฌ๋ํธ๋ก ์ ์ํ์ต๋๋ค.</li>
                        <li>Youtube Api๋ฅผ ํ์ฉํด ์ค์๊ฐ์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์ ๋ฌ๋ฐ์ต๋๋ค.</li>
                        <li>๋ฐ์ํ์ผ๋ก ์ ์ํ์ต๋๋ค.</li>
                        <li>REST API๋ฅผ ํ์ฉํ  ๋, POST MAN์ ์ด์ฉํด ํจ์จ์ ์ผ๋ก ์์ํ์ต๋๋ค.</li>
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

export default ModalYoutube;