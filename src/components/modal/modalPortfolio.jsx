import React from 'react';
import { useEffect } from 'react';
import styles from './modal.module.css'

const ModalPortfolio = ({setModalList, divRef}) => {

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
                    <h1 className={styles.content_title}>PortFolio Site</h1>
                </div>
                    <h3>포트폴리오 용도로 제작한 사이트</h3>
                    <div className={styles.content_box}>
                        <h2>📌Summary</h2>
                    <p>
                    현재 보고있는 사이트로, React를 활용해서 SPA사이트를 제작했습니다.<br/><br/>
                    포트폴리오 사이트를 동적으로 제작하면서, <br/>CSS의 Animation과 
                    ReactHooks에 대해 깊이 공부해볼수있었습니다.
                    앞으로 계속해서 React를 공부하면서 Dark Mode등의 기능을 추가할 예정입니다.<br/><br/>

                    <li><span className={styles.point}>Home </span>사이트의 가장 첫 화면입니다</li>
                    <li><span className={styles.point}>About</span>저의 대한 정보를 카드형식으로 디자인했습니다 </li>
                    <li><span className={styles.point}>Skills</span>기술스택 활용수치를 Progress Bar로 표현하고 사용가능한 기술스택들을 아이콘으로 보여줍니다</li>
                    <li><span className={styles.point}>MyWorks</span> 진행했던 프로젝트들을 슬라이더 라이브러리를 활용해서 제작했습니다</li>
                    <li><span className={styles.point}>Contact</span>연락처 정보를 볼수있는 페이지입니다.</li>
                    </p>
                    </div>

                    <div className={styles.content_box}>
                        <h2>🖥️상세 내용</h2>
                        <li>React함수형 컴포넌트로 제작했습니다.</li>
                        <li>UseEffect, useRef, forwardRef등과 같은 ReactHooks를 사용했습니다</li>
                        <li>React Confati라이브러리를 활용해서 text 호버의 애니메이션을 적용했습니다.</li>
                        <li>Scroll 높이를 감지하여 nav 클릭시 해당 위치로 이동합니다.</li>
                        <li>간단한 애니메이션들을 직접 만들어 적용했습니다.</li>
                        <li>JavaScript의 Observer를 활용해서 정해진 스크롤위치에 이동했을 때, Progress Bar가 움직입니다</li>
                        <li>Modal창을 직접 만들어 상세설명이 필요한 MyWorks부분에 적용했습니다.</li>
                        <li>React Keen-Slider 라이브러리를 활용했습니다.</li>

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

export default ModalPortfolio;