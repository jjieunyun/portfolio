import React from 'react';
import { useEffect } from 'react';
import styles from './modal.module.css'

const ModalYoutube = ({setModalList, divRef}) => {

    const onclickClose = () => {
        setModalList(null)
        document.body.style.overflowY = "scroll";
    }
    
     //🍎다른곳 클릭하면 메뉴창 없어짐
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
                    <h3>Youtube API를 활용해 실시간 영상 스트리밍이 가능한 페이지</h3>
                    <div className={styles.content_box}>
                        <h2>📌Summary</h2>
                    <p>
                    React를 활용한 첫번째 개인프로젝트입니다. <br/><br/>
                    이전에 CSS와 JS로 간단하게 페이지를 만든 경험을 토대로 <br/>
                    Youtube API를 Axios를 활용해 사이트를 개선했습니다.<br/>
                    검색기능을 구현하여 자신이 원하는 영상을 시청할 수있습니다.
                    <br/><br/>

                    <li><span className={styles.point}>Home </span>Youtube에서 제공하는 인기영상을 볼 수있습니다.</li>
                    <li><span className={styles.point}>Search</span>검색어를 입력하면 원하는 영상을 시청할 수있습니다. </li>
                    
                    </p>
                    </div>

                    <div className={styles.content_box}>
                        <h2>🖥️상세 내용</h2>
                    
                        <li>Class형 컴포넌트로 제작했습니다.</li>
                        <li>Youtube Api를 활용해 실시간으로 데이터를 전달받습니다.</li>
                        <li>반응형으로 제작했습니다.</li>
                        <li>REST API를 활용할 때, POST MAN을 이용해 효율적으로 작업했습니다.</li>
                    </div>

                    <div className={styles.content_box}>
                        <h2>⚒️Technology Stacks</h2>
                        <img alt="badge" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
                    </div>
                    
            </div>
        </article>
    );
};

export default ModalYoutube;