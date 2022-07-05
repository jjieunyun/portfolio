import React, { useState,useEffect, useRef } from 'react';
import styles from './navbar.module.css'

const Navbar = ({scrollEvent, sectionRefs}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const navRef = useRef([]);
    const navItems = useRef([]);

    // const [color,setColor] = useState(false)
    // const sections = sectionRefs.current

    //⭐스크롤 관련 Effect
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    

    const clickMenu = (event) => {
        const text = event.target.dataset.text;
        if(text == null) {
            return;
        }
        scrollEvent(text);
    }



    //⭐intersection observer
    /*
    1. 모든 섹션요소들과 sectionItems 가지고온다 -> props를 이용해서 app에서 section요소들을 받아옴(ref받아오기)
    2. IntersectionObserver를 이용해서 모든 섹션들을 관리한다 ->nav컴포넌트에서 코드만들기
    3. 보여지는 섹션에 해당하는 메뉴아이템을 활성화 시킨다
    */

    // let seletedNavItem = navItems[0];
    // let seletedNavIndex;

    // function selectNavItem(seleted) {
    //     seletedNavItem.classList.remove('styles.active')
    //     seletedNavItem = seleted;
    //     seletedNavItem.classList.add('styles.active')
    // }


    // const observerOptions = {
    //     root : null,
    //     rootMargin: '0px',
    //     threshole: 0.3,
    // }
    // const observerCallback = (entries, observer) => {
    //     // console.log(entries)
    //     entries.forEach(entry=>{
    //         // console.log(entry.target.className)
    //         if(!entry.isIntersecting && entry.isIntersectionRatio >0){
    //             console.log(entry)
    //             const index = sections.indexOf(`.${entry.target.className}`);
    //             // console.log(index, entry.target.className)

    //             //스크롤링이 아래로 되어서 페이지가 올라옴
    //             if(entry.boundingClientRect.y < 0) {
    //                 seletedNavIndex = index + 1;
    //             }else {
    //                 seletedNavIndex = index -1;
    //             }
    //             selectNavItem()                
    //         }
    //     })
    // }

    // useEffect(()=> {
    //     const observer = new IntersectionObserver(observerCallback, observerOptions);
    //     sections.forEach(section => observer.observe(section.current))
    // },[])
    


    return (
            <nav 
            onClick={(event)=>clickMenu(event)} 
            ref={navRef}
            className={`${scrollPosition < 100? styles.navbar : styles.changed_navbar}`}>
                <div 
                className={`${scrollPosition < 100? styles.navbar_logo : styles.changed_logo}`}>
                    <span 
                        className={`${scrollPosition < 100? styles.title : styles.changed_title}`}>
                        <p>jieun.Yun</p>
                    </span>
                </div>

                <ul
                
                className={`${scrollPosition < 100? styles.navbar_menu : styles.changed_menu}`}>
                    <li 
                        ref={(el)=>navItems.current[0]=el}
                        className={`${scrollPosition < 100? styles.navbar_menu_item : styles.changed_item}
                        `}
                        data-text='Home'
                        value='home'>
                        Home
                    </li>
                    <li 
                        ref={(el)=>navItems.current[1]=el}
                        className={`${scrollPosition < 100? styles.navbar_menu_item : styles.changed_item} 
                        `}
                        data-text='About'>
                        About
                    </li>
                    <li 
                        ref={(el)=>navItems.current[2]=el}
                        className={`${scrollPosition < 100? styles.navbar_menu_item : styles.changed_item} 
                        `}
                        data-text='Skills'>
                        Skills
                    </li>
                    <li 
                        ref={(el)=>navItems.current[3]=el}
                        className={`${scrollPosition < 100? styles.navbar_menu_item : styles.changed_item} 
                        `}
                        data-text='Myworks'>
                        Myworks
                    </li>
                    <li 
                        ref={(el)=>navItems.current[4]=el}
                        className={`${scrollPosition < 100? styles.navbar_menu_item : styles.changed_item} 
                        `}
                        data-text='Contact'>
                        Contact
                    </li>
                </ul>

                
            </nav>
    );
};

export default Navbar;