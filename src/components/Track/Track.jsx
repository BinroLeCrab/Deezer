import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import PlayBtn from "../PlayBtn/PlayBtn";
import s from "./Track.module.scss";

const Track = ({id, data, play, setPlay }) => {

    const audio = useRef(null);
    const wrapper = useRef(null);


    const handleClick = () => {
        if (play === id) {
            audio.current.pause();
            setPlay(false)
        } else {
            const audioArray = document.querySelectorAll("audio");
            audioArray.forEach(audioItem => {
                audioItem.pause();
            });
            
            audio.current.currentTime = 0;
            audio.current.play();
            setPlay(id);
        }
    }

    const tick = () => {
        if (play === id) {
            if (audio.current.ended) {
                setPlay(false);
                wrapper.current.style.background = "var(--color-primary)";
            } else {
                const percent = (audio.current.currentTime / audio.current.duration) * 100;
                wrapper.current.style.background = `conic-gradient(var(--color-primary) ${percent}%, var(--color-neutral-800) ${percent}%)`;
            }
        }
    }

    useEffect(() => {
        gsap.ticker.add(tick);
        return () => {
            gsap.ticker.remove(tick);
        }
    }, [play]);

    return (
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

            <audio ref={audio} controls>
                <source src={data?.preview} type="audio/mp3" />
            </audio>
        </div >
    );
};

export default Track;

/* 
     _____     _____
    |  _  |   |  _  |
   -| | | |---| | | |-
    |_____| 7 |_____|  ~B!nro~
    
*/