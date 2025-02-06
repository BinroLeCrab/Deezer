import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import PlayBtn from "../PlayBtn/PlayBtn";
import s from "./Track.module.scss";

const Track = ({ id, data, play, setPlay, micro, gallery, audio }) => {

    // const audio = useRef(null);
    const wrapper = useRef(null);

    const infoBulleRef = useRef();

    const handleMouseMove = (e) => {

        const infoBulleObject = infoBulleRef.current;
        infoBulleObject.style.display = "block";
        infoBulleObject.style.top = `${e.pageY + 12}px`;
        infoBulleObject.style.left = `${e.pageX + 12}px`;

        if (infoBulleObject.offsetLeft > (window.innerWidth - 100)) {
            infoBulleObject.style.left = `${e.pageX - infoBulleObject.offsetWidth - 12}px`;
        }
    };

    const handleClick = () => {
        if (play === id) {
            audio.pause();
            setPlay(false)
        } else {
            audio.pause();
            audio.src = "";

            audio.src = data.preview;
            audio.currentTime = 0;
            audio.play();
            setPlay(id);
        }
    }

    const tick = () => {
        if (play === id) {
            if (audio.ended) {
                setPlay(false);
                wrapper.current.style.background = "var(--color-primary)";
            } else {
                const percent = (audio.currentTime / audio.duration) * 100;
                wrapper.current.style.background = `conic-gradient(var(--color-primary) ${percent}%, var(--color-neutral-800) ${percent}%)`;
            }
        }
    }

    const tickMicro = () => {
        if (play === id) {
            if (audio.ended) {
                setPlay(false);
                wrapper.current.style.background = "var(--color-neutral-50)";
            } else {
                const percent = (audio.currentTime / audio.duration) * 100;
                wrapper.current.style.background = `conic-gradient(var(--color-neutral-50) ${percent}%, var(--color-neutral-800) ${percent}%)`;
            }
        }
    }

    useEffect(() => {

        if (micro) {
            gsap.ticker.add(tickMicro);
            return () => {
                gsap.ticker.remove(tickMicro);
            }
        } else {
            gsap.ticker.add(tick);
            return () => {
                gsap.ticker.remove(tick);
            }
        }
    }, [play]);

    return (
        <>
            {
                micro ? (
                    <>
                        <div className={s["Micro-Track"]}>
                            <div className={s["Micro-Track__cover-wrapper"]}>
                                <div ref={wrapper} className={`${s["Micro-Track__btn-wrapper"]} ${play === id && s['Micro-Track__btn-wrapper--play']}`}>
                                    <PlayBtn micro handleClick={handleClick} play={play} idTrack={id} />
                                </div>
                                <img className={s["Micro-Track__cover"]} src={data?.album?.cover} alt="" />
                            </div>
                            <div className={s["Micro-Track__info"]}>
                                <a href={data?.link} target="_blank">
                                    <h2 className={`${s["Micro-Track__name"]}  ${play === id && s['Micro-Track__name--play']}`}>{data?.title}</h2>
                                </a>
                                <a href={data?.artist?.link} target="_blank" className={s["Micro-Track__artist"]}>{data?.artist?.name}</a>
                            </div>
                        </div>
                    </>
                ) : gallery ? (
                    <>
                        <div ref={infoBulleRef} className={s['Gallery-Track__Info']}>
                            <p>{data?.title} - {data?.artist?.name}</p>
                        </div>
                        {
                            data.preview ? (
                                <div ref={wrapper} onClick={handleClick} className={`${s["Gallery-Track"]} ${play === id && s['Gallery-Track--play']}`} onMouseMove={handleMouseMove} onMouseLeave={() => infoBulleRef.current.style.display = "none"}>
                                    <img src={data?.album?.cover_medium || "assets/placeholderImg.jpg"} alt={`${data?.title} - ${data?.artist?.name}`} />
                                </div>
                            ) : (
                                <div ref={wrapper} className={`${s["Gallery-Track"]} ${s['Gallery-Track--noplay']}`} onMouseMove={handleMouseMove} onMouseLeave={() => infoBulleRef.current.style.display = "none"}>
                                    <img src={data?.album?.cover_medium || "assets/placeholderImg.jpg"} alt={`${data?.title} - ${data?.artist?.name}`} />
                                </div>
                            )
                        }
                    </>
                ) : (
                    <>
                        <div className={s["Track"]}>
                            <div
                                className={s["Track__cover-wrapper"]}
                                ref={wrapper}
                            >
                                <img onClick={handleClick} className={`${s['Track__cover']} ${play === id && s['Track__cover--play']}`} src={data?.album?.cover_big} alt="" />
                                <PlayBtn handleClick={handleClick} play={play} idTrack={id} />
                            </div>
                            <a href={data?.link} target="_blank" className={`${play === id && s['Track__name--play']}`} >
                                <h1 className={`${s['Track__name']} ${play === id && s['Track__name--play']}`} >{data?.title}</h1>
                            </a>
                            <div className={s['Track__artist']}>
                                <img src={data?.artist?.picture_small} alt="" />
                                <a href={data?.artist?.link} target="_blank">{data?.artist?.name}</a>
                            </div>
                        </div >
                    </>
                )
            }
        </>
    );
};

export default Track;

/* 
     _____     _____
    |  _  |   |  _  |
   -| | | |---| | | |-
    |_____| 7 |_____|  ~B!nro~
    
*/