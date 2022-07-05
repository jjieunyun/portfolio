import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import  './slider.css'

/* 이미지파일*/
import uptown from '../../imgs/uptown.png'
import booklog from '../../imgs/booklog.png'
import bookflix from '../../imgs/bookflix.png'
import youtube from '../../imgs/youtube.png'
import portfilio from '../../imgs/port.png'


import gifUptown from '../../imgs/gifUptown_cut.gif'
import gifPortfolio from '../../imgs/gifPortfolio_cut.gif'
import gifBooklog from '../../imgs/gifBooklog_cut.gif'
import gifYoutube from '../../imgs/gifYoutube_cut.gif'
import gifBookflix from '../../imgs/gifBookflix_cut.gif'


import ModalUptown from '../modal/modalUptown'
import ModalPortfolio from '../modal/modalPortfolio'
import ModalBooklog from '../modal/modalBooklog'
import ModalYoutube from '../modal/modalYoutube'
import ModalBookflix from '../modal/modalBookflix'
import { useRef } from 'react'



    export default function Slider() {

    /*썸네일을 클릭했을때 gif실행*/
    const [startGif, setStartGif] = useState(gifUptown);

    const startView = (title)=> {
        setStartGif(title)
    }


    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
        initial: 0,
        slides: {
            perView: 5,
            spacing: 30,
        },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    function ThumbnailPlugin(mainRef) {
        return (slider) => {
            function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
            }
            function addActive(idx) {
            slider.slides[idx].classList.add("active")
            }
    
            function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
            }
    
            slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(next)
            })
            })
        }
        }


        /*모달창 함수*/
        const [modalList, setModalList] = useState(null)

        const showModalUptown = () => {
            document.body.style.overflow = "hidden";
            setModalList('modalUptown')
        }

        const showModalPortfolio = () => {
            document.body.style.overflow = "hidden";
            setModalList('modlPortfolio')
        }

        const showModalBooklog = () => {
            document.body.style.overflow = "hidden";
            setModalList('modlBooklog')
        }

        const showModalYoubube = () => {
            document.body.style.overflow = "hidden";
            setModalList('modalYoutube')
        }

        const showModalBookFlix = () => {
            document.body.style.overflow = "hidden";
            setModalList('modalBookflix')
        }

        /*모달창 클릭하면 사라지게할때 필요한 REf*/ 
        const divRef = useRef();
    return (
        <section className='slider_container' ref={divRef}>
        {modalList === 'modalUptown' && <ModalUptown divRef={divRef} setModalList={setModalList}/>}
        {modalList === 'modlPortfolio' && <ModalPortfolio divRef={divRef} setModalList={setModalList}/>}
        {modalList === 'modlBooklog' && <ModalBooklog divRef={divRef} setModalList={setModalList}/>}
        {modalList === 'modalYoutube' && <ModalYoutube divRef={divRef} setModalList={setModalList}/>}
        {modalList === 'modalBookflix' && <ModalBookflix divRef={divRef} setModalList={setModalList}/>}
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <div className='img_container'>
                    <img className='mainIMG' src={startGif} alt="" />
                </div>
                <div className='slide_card'>
                    <div className='slide__bar'>
                        <div></div><div></div><div></div>
                    </div>
                    <h1 className='slide_card_title'>:UPTOWN</h1>
                    <h3>업사이클링 제품을 사용한 경험을 공유하고, <br/> 이용자간 물품을 거래할 수있는 커뮤니티 사이트</h3>
                    <p className='slide_card_contents'>
                    훈련기관에서 팀으로 진행한 프로젝트입니다(총 3명) <br/>
                    React, Redux, Firebase를 활용해 제작했습니다. <br/><br/>
                    업사이클링(Upcycling)을 주제로 선정하여 공통의 관심사를 가진 사람들이 <br/>자신의 이야기를 공유할 수있는 커뮤니티 공간을 만들었습니다.</p>
                    <div className="slide_card_buttons">
                        <button 
                            className='slide_card_contents_button_readme'
                            onClick={showModalUptown}
                        >자세히보기 ▶ README</button>
                        <div className='slide_card_buttons_innerContainer'>
                            <button onClick={() => window.open('https://github.com/jjieunyun/forked_uptown.git', '_blank')} className='slide_card_contents_button_Github'
                            ><i className="fa-brands fa-github"></i></button>
                            <button onClick={() => window.open('https://jjieunyun.github.io/uptown_demo/', '_blank')} className='slide_card_contents_button_ViewDemo'
                            ><i className="fa-solid fa-desktop"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="keen-slider__slide number-slide2">
            <div className='img_container'>
                    <img className='mainIMG' src={startGif} alt="" />
                </div>
                <div className='slide_card'>
                    <div className='slide__bar'>
                        <div></div><div></div><div></div>
                    </div>
                    <h1 className='slide_card_title'>PortFolio Site</h1>
                    <h3>개인 포트폴리오 용도로 제작한 사이트</h3>
                    <div className='slide_card_contents'>
                        <p>현재 보고있는 사이트로, React를 활용해서 SPA사이트를 제작했습니다.<br/><br/>
                        포트폴리오 사이트를 동적으로 제작하면서, <br/>CSS의 Animation과 
                        ReactHooks에 대해 깊이 공부해볼수있었습니다.<br/>
                        앞으로 계속해서 React를 공부하면서 Dark Mode등의 기능을 추가할 예정입니다.
                        </p>
                    </div>
                    <div className="slide_card_buttons">
                        <button 
                            className='slide_card_contents_button_readme'
                            onClick={showModalPortfolio}
                        >자세히보기 ▶ README</button>
                        <div className='slide_card_buttons_innerContainer'>
                            <button onClick={() => window.open('https://github.com/jjieunyun/myportfolio.git', '_blank')} className='slide_card_contents_button_Github'
                            ><i className="fa-brands fa-github"></i></button>
                            <button className='slide_card_contents_button_ViewDemo'
                            ><i onClick={() => window.open('https://jjieunyun.github.io/myportfolio/', '_blank')} className="fa-solid fa-desktop"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="keen-slider__slide number-slide3">
            <div className='img_container'>
                    <img className='mainIMG' src={startGif} alt="" />
                </div>
                <div className='slide_card'>
                    <div className='slide__bar'>
                        <div></div><div></div><div></div>
                    </div>
                    <h1 className='slide_card_title'>BookLog</h1>
                    <h3>독서를 완료한 책의 간단한 정보를 기록할 수있는 <br/>독서기록장</h3>
                    <div className='slide_card_contents'>
                        React 프레임워크를 통해서 제작했습니다. <br/><br/>
                        React 프레임워크를 공부하면서 두번째로 진행한 개인프로젝트입니다. <br/>
                        React 함수형을 사용했고, React Router를 사용해 페이지를 이동합니다. <br/>
                        Firebase의 인증,Realtime DB를 적용하여 본인의 데이터는 본인만 볼수있습니다.

                    </div>
                    <div className="slide_card_buttons">
                        <button 
                            className='slide_card_contents_button_readme'
                            onClick={showModalBooklog}
                        >자세히보기 ▶ README</button>
                        <div className='slide_card_buttons_innerContainer'>
                            <button onClick={() => window.open('https://github.com/jjieunyun/Book_Log_maker.git', '_blank')} className='slide_card_contents_button_Github'
                            ><i className="fa-brands fa-github"></i></button>
                            <button onClick={() => window.open('https://jjieunyun.github.io/Book_Log_maker_demo/', '_blank')} className='slide_card_contents_button_ViewDemo'
                            ><i className="fa-solid fa-desktop"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="keen-slider__slide number-slide4">
            <div className='img_container'>
                    <img className='mainIMG' src={startGif} alt="" />
                </div>
                <div className='slide_card'>
                    <div className='slide__bar'>
                        <div></div><div></div><div></div>
                    </div>
                    <h1 className='slide_card_title'>Youtube CloneCoding</h1>
                    <h3>Youtube API를 활용해 실시간 영상 스트리밍이 가능한 페이지</h3>
                    <div className='slide_card_contents'>
                        React를 활용한 첫번째 개인프로젝트입니다. <br/><br/>
                        이전에 CSS와 JS로 간단하게 페이지를 만든 경험을 토대로 <br/>
                        Youtube API를 Axios를 활용해 사이트를 개선했습니다.<br/>
                        검색기능을 구현하여 자신이 원하는 영상을 시청할 수있습니다.
                    </div>
                    <div className="slide_card_buttons">
                        <button 
                            className='slide_card_contents_button_readme'
                            onClick={showModalYoubube}
                        >자세히보기 ▶ README</button>
                        <div className='slide_card_buttons_innerContainer'>
                            <button onClick={() => window.open('https://github.com/jjieunyun/react_youtube.git', '_blank')} className='slide_card_contents_button_Github'
                            ><i className="fa-brands fa-github"></i></button>
                            <button onClick={() => window.open('https://jjieunyun.github.io/react_youtube/', '_blank')} className='slide_card_contents_button_ViewDemo'
                            ><i className="fa-solid fa-desktop"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="keen-slider__slide number-slide5">
            <div className='img_container'>
                    <img className='mainIMG' src={startGif} alt="" />
                </div>
                <div className='slide_card'>
                    <div className='slide__bar'>
                        <div></div><div></div><div></div>
                    </div>
                    <h1 className='slide_card_title'>BookFlix</h1>
                    <h3>Netflix사이트를 참고하여만든 책을 주제로한 사이트</h3>
                    <div className='slide_card_contents'>
                        Vue.js 프레임워크를 통해서 제작했습니다. <br/><br/>
                        데이터를 Vuex에 저장하고 VueRouter 활용하여 제작했습니다.<br/>
                        당시 Api, Firebase 등을 학습하기 이전이라 많은 기능을 구현하진 못했지만,<br/>
                        추후에 Firebase로 로그인기능을 추가하고 웹 API를 사용해 개선할예정입니다.
                    </div>
                    <div className="slide_card_buttons">
                        <button 
                            className='slide_card_contents_button_readme'
                            onClick={showModalBookFlix}
                        >자세히보기 ▶ README</button>
                        <div className='slide_card_buttons_innerContainer'>
                            <button onClick={() => window.open('https://github.com/jjieunyun/mybookflix.git', '_blank')} className='slide_card_contents_button_Github'
                            ><i className="fa-brands fa-github"></i></button>
                            <button onClick={() => window.open('https://jjieunyun.github.io/mybookflix/', '_blank')} className='slide_card_contents_button_ViewDemo'
                            ><i className="fa-solid fa-desktop"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div ref={thumbnailRef} className="keen-slider thumbnail">
            <div className="keen-slider__slide number-slide1">
                <img onClick={()=>startView(gifUptown)} src={uptown} alt="" />
            </div>
            <div className="keen-slider__slide number-slide2">
                <img onClick={()=>startView(gifPortfolio)} src={portfilio} alt="" />
            </div>
            <div className="keen-slider__slide number-slide3">
                <img onClick={()=>startView(gifBooklog)} src={booklog} alt="" />
            </div>
            <div className="keen-slider__slide number-slide4">
                <img onClick={()=>startView(gifYoutube)} src={youtube} alt="" />
            </div>
            <div className="keen-slider__slide number-slide5">
                <img onClick={()=>startView(gifBookflix)} src={bookflix} alt="" />
            </div>
        </div>
        </section>
    )
}
