import React, { useEffect, useState } from 'react';
import styles from './arrow.module.css'

const Arrow = ({homeHeight, clickHome}) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [style, setStyle] = useState({opacity : 0, pointerEvents : 'none'})


    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        });
        
        if(window.scrollY > (homeHeight /2)) {
            setStyle({opacity : 1, pointerEvents : 'auto'})
        }else {
            setStyle({opacity : 0, pointerEvents : 'none'})
        }
    },[homeHeight,scrollPosition]);

    return (
        <div 
            className={styles.arrowUp} 
            style={{opacity : `${style.opacity}`, pointerEvents : `${style.pointerEvents}`}}
            onClick={()=>clickHome()}
            >
                <span><i className="fa-solid fa-arrow-up"></i></span>
        </div>
    );
};

export default Arrow;