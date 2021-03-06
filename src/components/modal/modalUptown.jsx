import React from 'react';
import { useEffect } from 'react';
import styles from './modal.module.css'

const ModalUptown = ({setModalList, divRef}) => {

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
                    <h1 className={styles.content_title}>:UPTOWN</h1>
                </div>
                    <h3>์์ฌ์ดํด๋ง ์ ํ์ ์ฌ์ฉํ ๊ฒฝํ์ ๊ณต์ ํ๊ณ , <br/> ์ด์ฉ์๊ฐ ๋ฌผํ์ ๊ฑฐ๋ํ  ์์๋ ์ปค๋ฎค๋ํฐ ์ฌ์ดํธ</h3>
                    <div className={styles.content_box}>
                        <h2>๐Summary</h2>
                    <p>
                    ํ๋ จ๊ธฐ๊ด์์ ํ์ผ๋ก ์งํํ ํ๋ก์ ํธ์๋๋ค.(์ด 3๋ช) 
                    ์์ฌ์ดํด๋ง(Upcycling)์ ์ฃผ์ ๋ก ์ ์ ํ์ฌ ๊ณตํต์ ๊ด์ฌ์ฌ๋ฅผ ๊ฐ์ง ์ฌ๋๋ค์ด ์์ ์ ์ด์ผ๊ธฐ๋ฅผ ๊ณต์ ํ  ์์๋ ์ปค๋ฎค๋ํฐ ๊ณต๊ฐ์ ๋ง๋ค์์ต๋๋ค.
                    <br/><br/>

                    <li><span className={styles.point}>Home </span>ํ์ด์ง์๋ ์ ๊ท๋ก ์์ฑ๋ ๊ธ์ ์ฌ๋ผ์ด๋๋ก ๋ณด์ฌ์ฃผ์์ต๋๋ค. </li>
                    <li><span className={styles.point}>Login</span> ์ /ํ๋ก ๋ ๋๋ง๋๋ ํ์ด์ง๋ฅผ ๋ฐ๋ก ์ค์ ํ์์ต๋๋ค. </li>
                    <li><span className={styles.point}>About</span>๋ ์์ฌ์ดํด๋ง์ ์ ๋ณด์ ์ฌ์ดํธ์ ์ทจ์ง๋ฅผ ์๋ดํ๊ธฐ์ํ ํ์ด์ง์๋๋ค. </li>
                    <li><span className={styles.point}>Review</span>ํ์ด์ง๋ ์ฌ์ดํธ์ ๋ฉ์ธ ์๋น์ค์ค ํ๋๋ก, ์ด์ฉ์๋ค์ด ์์ ์ด ์ฌ์ฉํ๊ณ  ์๋ ์์ฌ์ดํด๋ง ์ ํ์ ๊ณต์ ํ  ์์๋ ํ์ด์ง์๋๋ค.  </li>
                    <li><span className={styles.point}>Market</span>ํ์ด์ง๋ ๋น๊ทผ๋ง์ผ์ฒ๋ผ ๊ฐ์ธ๊ณผ ๊ฐ์ธ์ด ๋ฌผํ์ ์ฌ๊ณ ํ ์์๋ ํ์ด์ง์๋๋ค. </li>
                    <li><span className={styles.point}>MyPage</span>์์๋ ๊ธฐ๋ณธ ํ๋กํ์ ์์ ํ  ์์๊ณ  ๋ณธ์ธ์ด ์์ฑํ ๊ฒ์๊ธ์ ๋ชจ์์ ๋ณด์ฌ์ค๋๋ค. </li>
                    </p>
                    </div>

                    <div className={styles.content_box}>
                        <h2>๐ฅ๏ธ๋ด๋น ์ญํ </h2>
                    
                        <li>firebase์ Realtime DB๋ฅผ ์ฌ์ฉํ์ฌ ๊ฒ์๊ธ์ CRUD๊ธฐ๋ฅ์ ๊ตฌํํ์ต๋๋ค.</li>
                        <li>์ด๋ฏธ์ง๋ฐ์ดํฐ๋ Cloudinary์๋น์ค๋ฅผ ์ด์ฉํด์ Cloud์ ์ด๋ฏธ์ง๋ฅผ ์ ์ฅํ๊ณ 
                    ๋น๋๊ธฐ๋ก URL์ ๋ฐ์์ Realtime DB์ ์ ์ฅํ๋ ๋ฐฉ๋ฒ์ ์ฌ์ฉํ์ต๋๋ค. </li>
                        <li>๊ฐ ๊ฒ์๋ฌผ์ ๋๊ธ์์ฑ,์ญ์ ,์์ ๊ธฐ๋ฅ์ ๊ตฌํํ์ต๋๋ค. </li>
                        <li>'โค๏ธ'์ธ์คํ๊ทธ๋จ์ ์ข์์ ๊ธฐ๋ฅ์ ๊ตฌํํ์ต๋๋ค. </li>
                        <li>MyPage์๋ ๋ณธ์ธ์ด ์์ฑํ ๊ฒ์๋ฌผ, ๋๊ธ, 'โค๏ธ'๊ฒ์๋ฌผ๋ง ๋ณผ์์๋๋ก ๊ตฌํํ์ต๋๋ค. </li>
                        <li>Redux Toolkit์ ์ฌ์ฉํ์ฌ ํด์ํ๊ทธ๋ก ์ํ๋ ๊ฒ์๋ฌผ๋ง ๊ฒ์ํ  ์์๋๋ก ๊ตฌํํ์ต๋๋ค.</li>

                    </div>

                    <div className={styles.content_box}>
                        <h2>โ๏ธTechnology Stacks</h2>
                        <img alt="badge" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/Cloudinary-2C39BD?style=for-the-badge&logo=Cloudways&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
                    </div>
                    
            </div>
        </article>
    );
};

export default ModalUptown;