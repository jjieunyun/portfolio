import React from 'react';
import { useEffect } from 'react';
import styles from './modal.module.css'

const ModalBookflix = ({setModalList, divRef}) => {

    const onclickClose = () => {
        setModalList(null)
        document.body.style.overflowY = "scroll";
    }

    //🍎다른곳 클릭하면 메뉴창 없어짐
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
                    <h3>Netflix사이트를 참고하여만든 책을 주제로한 사이트</h3>
                    <div className={styles.content_box}>
                        <h2>📌Summary</h2>
                    <p>
                    Vue.js 프레임워크를 통해서 제작했습니다. <br/><br/>
                    데이터를 Vuex에 저장하고 VueRouter 활용하여 제작했습니다.<br/>
                    당시 Api, Firebase 등을 학습하기 이전이라 많은 기능을 구현하진 못했지만,,<br/>
                    추후에 Firebase로 로그인기능을 추가하고 웹 API를 사용해 개선할예정입니다.

                    <li><span className={styles.point}>Home </span>Vuex에 저장된 데이터를 받아와 슬라이더로 보여줍니다.</li>
                    <li><span className={styles.point}>검색</span>실제 검색기능은 되지않지만 검색어가 자동저장됩니다.</li>
                    <li><span className={styles.point}>내서재</span>Home화면에서 '내서재에 담기'를 누른 도서를 볼 수있습니다.</li>
                    </p>
                    </div>

                    <div className={styles.content_box}>
                        <h2>🖥️상세 내용</h2>
                        <li>웹팩을 활용하여 프로젝트를 진행했습니다.</li>
                        <li>HTML구조를 이해하고 CSS작업을 진행했습니다.</li>
                        <li>VueRouter 라이브러리를 활용했습니다.</li>
                        <li>Vuex를 사용하여 데이터 상태관리를 했습니다.</li>
                    </div>

                    <div className={styles.content_box}>
                        <h2>⚒️Technology Stacks</h2>
                        <img alt="badge" src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=Vue.js&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
                    </div>
                    
            </div>
        </article>
    );
};

export default ModalBookflix;