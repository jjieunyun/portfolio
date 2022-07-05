import React from 'react';
import { useEffect } from 'react';
import styles from './modal.module.css'

const ModalUptown = ({setModalList, divRef}) => {

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
                    <h1 className={styles.content_title}>:UPTOWN</h1>
                </div>
                    <h3>업사이클링 제품을 사용한 경험을 공유하고, <br/> 이용자간 물품을 거래할 수있는 커뮤니티 사이트</h3>
                    <div className={styles.content_box}>
                        <h2>📌Summary</h2>
                    <p>
                    훈련기관에서 팀으로 진행한 프로젝트입니다.(총 3명) 
                    업사이클링(Upcycling)을 주제로 선정하여 공통의 관심사를 가진 사람들이 자신의 이야기를 공유할 수있는 커뮤니티 공간을 만들었습니다.
                    <br/><br/>

                    <li><span className={styles.point}>Home </span>페이지에는 신규로 작성된 글을 슬라이더로 보여주었습니다. </li>
                    <li><span className={styles.point}>Login</span> 전/후로 렌더링되는 페이지를 따로 설정하였습니다. </li>
                    <li><span className={styles.point}>About</span>는 업사이클링의 정보와 사이트의 취지를 안내하기위한 페이지입니다. </li>
                    <li><span className={styles.point}>Review</span>페이지는 사이트의 메인 서비스중 하나로, 이용자들이 자신이 사용하고 있는 업사이클링 제품을 공유할 수있는 페이지입니다.  </li>
                    <li><span className={styles.point}>Market</span>페이지는 당근마켓처럼 개인과 개인이 물품을 사고팔 수있는 페이지입니다. </li>
                    <li><span className={styles.point}>MyPage</span>에서는 기본 프로필을 수정할 수있고 본인이 작성한 게시글을 모아서 보여줍니다. </li>
                    </p>
                    </div>

                    <div className={styles.content_box}>
                        <h2>🖥️담당 역할</h2>
                    
                        <li>firebase의 Realtime DB를 사용하여 게시글의 CRUD기능을 구현했습니다.</li>
                        <li>이미지데이터는 Cloudinary서비스를 이용해서 Cloud에 이미지를 저장하고
                    비동기로 URL을 받아와 Realtime DB에 저장하는 방법을 사용했습니다. </li>
                        <li>각 게시물의 댓글작성,삭제,수정기능을 구현했습니다. </li>
                        <li>'❤️'인스타그램의 좋아요 기능을 구현했습니다. </li>
                        <li>MyPage에는 본인이 작성한 게시물, 댓글, '❤️'게시물만 볼수있도록 구현했습니다. </li>
                        <li>Redux Toolkit을 사용하여 해시태그로 원하는 게시물만 검색할 수있도록 구현했습니다.</li>

                    </div>

                    <div className={styles.content_box}>
                        <h2>⚒️Technology Stacks</h2>
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