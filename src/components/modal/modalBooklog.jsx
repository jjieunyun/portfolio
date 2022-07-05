import React from 'react';
import { useEffect } from 'react';
import styles from './modal.module.css'

const ModalBooklog = ({setModalList, divRef}) => {

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
                    <h1 className={styles.content_title}>BookLog</h1>
                </div>
                <h3>독서를 완료한 책의 간단한 정보를 기록할 수있는 독서기록장</h3>
                    <div className={styles.content_box}>
                        <h2>📌Summary</h2>
                    <p>
                    React 프레임워크를 통해서 제작했습니다. <br/><br/>
                    React 프레임워크를 공부하면서 두번째로 진행한 개인프로젝트입니다. <br/>
                    React 함수형을 사용했고, React Router를 사용해 페이지를 이동합니다. <br/>
                    Firebase의 인증,Realtime DB를 적용하여 본인의 데이터는 본인만 볼수있습니다.
                    <br/><br/>
                    <li><span className={styles.point}>login </span>사이트의 가장 첫 화면입니다.구글, GitHub로 로그인합니다.</li>
                    <li><span className={styles.point}>Logmaker</span>책에대한 정보를 표형식으로 볼 수있고 수정, 추가할 수있습니다.</li>
                    <li><span className={styles.point}>LogPreview</span>기록한 내용을 카드형식으로 볼 수있습니다.</li>
                    </p>
                    </div>

                    <div className={styles.content_box}>
                        <h2>🖥️상세 내용</h2>
                        <li>React함수형 컴포넌트로 제작했습니다.</li>
                        <li>UseEffect, useRef, forwardRef등과 같은 ReactHooks를 사용했습니다</li>
                        <li>ReactRouter를 활용해서 페이지를 이동합니다.</li>
                        <li>Google Firebase를 활용해 인증기능을 구현했습니다.</li>
                        <li>Firebase Realtime DB를 활용해 데이터를 저장하고 불러옵니다.</li>
                        <li>Cloudinary서비스를 활용해 이미지데이터를 저장하고 비동기로 저장합니다.</li>

                    </div>

                    <div className={styles.content_box}>
                        <h2>⚒️Technology Stacks</h2>
                        <img alt="badge" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/Cloudinary-2C39BD?style=for-the-badge&logo=Cloudways&logoColor=white"/>
                        <img alt="badge" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
                    </div>
                    
            </div>
        </article>
    );
};

export default ModalBooklog;