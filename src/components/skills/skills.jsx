import React, { forwardRef, useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import styles from './skills.module.css'

import backgound_dot2 from '../../imgs/backgound_dot2.png'

import bootstrap from '../../imgs/stack/bootstrap.svg'
import css from '../../imgs/stack/css-3.svg'
import express from '../../imgs/stack/express.svg'
import firebase from '../../imgs/stack/firebase.svg'
import github from '../../imgs/stack/github-icon.svg'
import html from '../../imgs/stack/html-5.svg'
import js from '../../imgs/stack/javascript.svg'
import jquery from '../../imgs/stack/jquery.svg'
import postcss from '../../imgs/stack/postcss.svg'
import router from '../../imgs/stack/react-router.svg'
import react from '../../imgs/stack/react.svg'
import redux from '../../imgs/stack/redux.svg'
import vue from '../../imgs/stack/vue.svg'
import vuetify from '../../imgs/stack/vuetifyjs.svg'


const Skills = forwardRef((props,ref) => {
    const skillsRef = useRef();

    const htmlRef = useRef();
    const cssRef = useRef();
    const jsRef = useRef();
    const reactRef = useRef();
    const vueRef = useRef();
    const jqueryRef = useRef();
    const nodeRef = useRef();

    const [barStyles, setBarStyles] = useState({width: '0%'});
    const [details, setDetails] = useState(null)

const handleScroll = useCallback(([entry]) => {
        if(entry.isIntersecting) {
        setBarStyles({visibility: 'visible', })
    }
}, []);

useEffect(() => {
    let observer;
    const { current } = skillsRef;
    
    if (current) {
    observer = new IntersectionObserver(handleScroll, { threshold: 0.3});
    observer.observe(current);
    return () => observer && observer.disconnect();
    };
}, [handleScroll]);


//⭐ 기술스택아이콘 hover함수
const removeHover = () => {
    setDetails(null)
}

const hoverHtml = () => {
    setDetails([
        'HTML5웹 표준을 준수하고자 노력합니다.',
        '시멘틱웹을 이해하고 구조적으로 마크업할 수 있습니다.'
    ])
}

const hoverCSS = () => {
    setDetails([
        'Sass와 같은 CSS Preprocessor 를 사용할 수 있습니다.',
        'PostCSS 및 BootStrap등 CSS 라이브러리를 사용할 수 있습니다.',
        'keyframes를 활용한 간단한 애니메이션을 구현할 수있습니다.',
        '반응형 페이지를 적용할 수 있습니다.',
        'Sass와 같은 CSS Preprocessor 를 사용할 수 있습니다.'
    ])
}

const hoverJs = () => {
    setDetails([
        'ES6 문법을 활용해 웹 어플리케이션을 개발할 수 있습니다.',
        'Vanilla JS 를 이용해 DOM을 조작할 수 있습니다.',
        'reduce, map, filter 등 다양한 고차함수를 적극적으로 활용합니다.'
    ])
}

const hoverVue = () => {
    setDetails([
        'Vue의 컴포넌트 라이프사이클을 각 상황에 맞게 잘 적용합니다.',
        '라이브러리를 사용하여 페이지를 제작할 수 있습니다.',
        'Vutify라이브러리를 활용하여 UI를 제작할 수있습니다.'
    ])
}

const hoverReact = () => {
    setDetails([
        '함수형 컴포넌트로 SPA를 이해하고 작성할 수있습니다.',
        'React Hooks를 이해하고 컴포넌트를 설계할 수있습니다.',
        'Redux Toolkit을 활용하여 데이터 상태관리, Thunk를 활용한 비동기 작업을 할 수있습니다.',
        'React Router 라이브러리를 사용해 페이지를 제작 할 수있습니다.'
    ])
}

const hoverJquery = () =>{
    setDetails([
        'Dom구조를 이해하고 조작할 수있습니다.',
        'Jquery라이브러리를 적절하게 사용할 수있습니다.'
    ])
}

const hoverNode = () => {
    setDetails([
        'Express.js를 이용해 REST API 를 작성할 수 있습니다.',
        '현재 Node.js를 통해서 백엔드 기초를 공부하고 있습니다.'
    ])
}

const hoverGit = () => {
    setDetails([
        'Git Hub를 활용한 팀프로젝트 경험이 있습니다.'
    ])
}

const hoverFirebase = () => {
    setDetails([
        'Google, GitHub 등을 활용한 인증 및 로그인을 구현할 수 있습니다.',
        'Realtiem Database를 활용해 웹페이지에서 데이터 읽기,쓰기,수정,삭제를 구현할 수 있습니다.',
        'Cloudinary를 활용하여 비동기로 웹페이지를 구현한 경험이 있습니다.'
    ])
}


    return (
        <section ref={ref} className={styles.skills}>
            <img className={styles.background} src={backgound_dot2} alt="" />
            <div className={styles.container}>
            <h1>Skills & Attributes</h1>
                <div ref={skillsRef} className={styles.skillset}>
                    <div className={styles.bar}>
                            <div></div><div></div><div></div>
                    </div>
                    <div className={styles.skillset_container}>
                        {/*알고있는 언어*/}
                        <div className={styles.skillset_left}>
                            <h3 className={styles.skillset_title}>Skills</h3>
                                <div className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>HTML</span>
                                        <span  className={styles.per}>90%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div ref={htmlRef} style={barStyles} className={`${styles.skill_value} ${styles.value1}`}></div>
                                        </div>
                                </div>

                                <div ref={cssRef} className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>CSS</span>
                                        <span className={styles.per}>90%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div style={barStyles} className={`${styles.skill_value} ${styles.value2}`}></div>
                                        </div>
                                </div>

                                <div ref={jsRef} className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>JavaScript</span>
                                        <span className={styles.per}>80%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div style={barStyles} className={`${styles.skill_value} ${styles.value3}`}></div>
                                        </div>
                                    
                                </div>

                                <div ref={reactRef} className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>React</span>
                                        <span className={styles.per}>70%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                            <div style={barStyles} className={`${styles.skill_value} ${styles.value4}`}></div>
                                        </div>
                                    
                                </div>

                                <div ref={vueRef} className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>Vue.js</span>
                                        <span className={styles.per}>70%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                        <div style={barStyles} className={`${styles.skill_value} ${styles.value5}`}></div>
                                    </div>
                                </div>

                                <div ref={jqueryRef} className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>JQuery</span>
                                        <span className={styles.per}>60%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                        <div style={barStyles} className={`${styles.skill_value} ${styles.value6}`}></div>
                                    </div>
                                </div>

                                <div ref={nodeRef} className={styles.skill}>
                                    <div className={styles.description}>
                                        <span className={styles.lang}>Node.js</span>
                                        <span className={styles.per}>40%</span>
                                    </div>
                                        <div className={styles.skill_bar}>
                                        <div style={barStyles} className={`${styles.skill_value} ${styles.value7}`}></div>
                                    </div>
                                </div>
                        </div>

                        {/*tool, Etc*/}
                        <div className={styles.skillset_right}>
                            <div className={styles.tools}>
                                <ul className={styles.tools_list}>
                                    <img onMouseOver={hoverHtml} onMouseLeave={removeHover} src={html} alt="html" />
                                    <img onMouseOver={hoverCSS} onMouseLeave={removeHover} src={css} alt="css" />
                                    <img onMouseOver={hoverCSS} onMouseLeave={removeHover} src={postcss} alt="postcss" />
                                    <img onMouseOver={hoverCSS} onMouseLeave={removeHover} src={bootstrap} alt="bootstrap" />
                                    <img onMouseOver={hoverJs} onMouseLeave={removeHover} src={js} alt="js" />
                                    <img onMouseOver={hoverReact} onMouseLeave={removeHover} src={react} alt="react" />
                                    <img onMouseOver={hoverReact} onMouseLeave={removeHover} src={router} alt="router" />
                                    <img onMouseOver={hoverReact} onMouseLeave={removeHover} src={redux} alt="redux" />
                                    <img onMouseOver={hoverVue} onMouseLeave={removeHover} src={vue} alt="vue" />
                                    <img onMouseOver={hoverVue} onMouseLeave={removeHover} src={vuetify} alt="vuetify" />
                                    <img onMouseOver={hoverJquery} onMouseLeave={removeHover} src={jquery} alt="jquery" />
                                    <img onMouseOver={hoverNode} onMouseLeave={removeHover} src={express} alt="express" />
                                    <img onMouseOver={hoverFirebase}onMouseLeave={removeHover} src={firebase} alt="firebase" />
                                    <img onMouseOver={hoverGit} onMouseLeave={removeHover} src={github} alt="github" />
                                </ul>
                            </div>
                            <div className={styles.etc}>
                                <h3 className={styles.skillset_title}>Details</h3>
                                {
                                    details === null ? (
                                        <div className={styles.details_none_box}>
                                            <p className={styles.details_question}><i className="fa-solid fa-circle-question"></i></p>
                                            <span className={styles.details_pointer}><i className="fa-solid fa-arrow-pointer"></i></span>
                                        </div>
                                    ) 
                                    : (
                                    details.map((item,index) => {
                                        return <li className={styles.details}  key={index}>{item}</li>
                                    })
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Skills;