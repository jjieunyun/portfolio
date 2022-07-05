import React, { forwardRef, useCallback, useRef } from 'react';
import Slider from '../slider/slider';
import styles from './works.module.css'

import backgound_dot3 from '../../imgs/backgound_dot3.png'
import { useEffect } from 'react';

const Works = forwardRef((props,ref) => {
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
        observer = new IntersectionObserver(handleScroll, { threshold: 0.05});
        observer.observe(current);
        return () => observer && observer.disconnect();
        };
    }, [handleScroll]);

    return (
        <section ref={ref} className={styles.work}>
            <img className={styles.background} src={backgound_dot3} alt="" />
            <div  className={styles.work_container}>
                <div className={styles.subTitle}>Projects</div>
                <h1 className={styles.title}>My Works</h1>
                <div ref={divRef}  className={styles.slider}>
                    <Slider/>
                </div>
            </div>
        </section>
    );
});

export default Works;