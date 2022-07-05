import React, { forwardRef, useCallback, useEffect } from 'react';
import styles from './contact.module.css';

import background_paper from '../../imgs/background_paper.png'
import avatar from '../../imgs/avatar_contact.png'
import qr from '../../imgs/qr_kakao.png'
import { useRef } from 'react';

const Contact = forwardRef((props,ref) => {

    const divRef = useRef();

    const handleScroll = useCallback(([entry]) => {
    const { current } = divRef;
        if(entry.isIntersecting) {
            current.style.transitionProperty = 'opacity transform';
            current.style.transitionDuration = '1s';
            current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
            current.style.transitionDelay = '0s';
            current.style.opacity = 1;
            current.style.transform = 'translate3d(0, 0, 0)';
        }
    }, []);

    useEffect(() => {
        let observer;
        const { current } = divRef;
        
        if (current) {
        observer = new IntersectionObserver(handleScroll, { threshold: 1});
        observer.observe(current);
        return () => observer && observer.disconnect();
        };
    }, [handleScroll]);


    return (
        <section ref={ref} className={styles.contact}>
            <img className={styles.background} src={background_paper} alt="" />
            <img className={styles.avatar} src={avatar} alt="" />
            <h1 className={styles.title}>Contact</h1>
            <div className={styles.container}>
        
                <div  ref={divRef} className={styles.Profilecard}>
                    <p className={styles.name}>Yun jieun</p>
                    <img className={styles.qr} src={qr} alt="" />
                    <div className={styles.content_container}>
                        <p className={styles.email_title}>E-mail</p>
                        <p>jjieunyun@naver.com</p>
                    </div>

                    <div className={styles.icon_container}>
                        <div className={styles.icon_box}>
                        <p className={styles.icon_title}>Github</p>
                            <a target="_blank" rel="noopener noreferrer" className={styles.icon} href='https://github.com/jjieunyun'>
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                        <div className={styles.box}>
                        <p className={styles.icon_title}>Notion</p>
                            <a target="_blank" rel="noopener noreferrer" className={styles.icon} href='https://forested-verbena-e9a.notion.site/JJIEUN-Develop-Note-f7b237fb5508431080a0c251b63549be'>
                                <i class="fa-solid fa-cube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        <footer className={styles.footer}>
            <div className={styles.footerLogo_container}>
                <h1>Yun jieun</h1>
            </div>
            <p>Thanks for visiting MyPage</p>
            <p>Copyright ⓒ 2022.jieun Yun All rights reserved.</p>
        </footer>
        </section>
    );
});

export default Contact;