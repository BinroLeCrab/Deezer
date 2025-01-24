import { useEffect, useRef } from "react";
import s from "./Micro_track.module.scss";
import Micro_PlayBtn from "../Micro_PlayBt/Micro_PlayBtn";
import gsap from "gsap";

const Micro_track = ({ data, play, setPlay, id }) => {

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
                wrapper.current.style.background = "var(--color-neutral-50)";
            } else {
                const percent = (audio.current.currentTime / audio.current.duration) * 100;
                wrapper.current.style.background = `conic-gradient(var(--color-neutral-50) ${percent}%, var(--color-neutral-800) ${percent}%)`;
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
        <div className={s["Micro-Track"]}>
            <div className={s["Micro-Track__cover-wrapper"]}>
                <audio ref={audio} controls>
                    <source src={data?.preview} type="audio/mp3" />
                </audio>
                <div ref={wrapper} className={`${s["Micro-Track__btn-wrapper"]} ${play === id && s['Micro-Track__btn-wrapper--play']}`}>
                    <Micro_PlayBtn handleClick={handleClick} play={play} idTrack={id} />
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
    );
};

export default Micro_track;

/* 
     _____     _____
    |  _  |   |  _  |
   -| | | |---| | | |-
    |_____| 7 |_____|  ~B!nro~
    
*/