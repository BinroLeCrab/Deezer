import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import PlayBtn from "../PlayBtn/PlayBtn";
import s from "./Track.module.scss";

const Track = ({ data }) => {

    const audio = useRef(null);
    const wrapper = useRef(null);

    const [play, setPlay] = useState(false);

    const handleClick = () => {
        if (play) {
            audio.current.pause();
        } else {
            audio.current.currentTime = 0;
            audio.current.play();
        }
        setPlay(!play);
    }

    const tick = () => {
        if (play) {
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
                <img onClick={handleClick} className={`${s['Track__cover']} ${play && s['Track__cover--play']}`} src={data?.album?.cover_big} alt="" />
                <PlayBtn handleClick={handleClick} play={play} />
            </div>
            <a href={data?.link} target="_blank">
                <h1 className={`${s['Track__name']} ${play && s['Track__name--play']}`} >{data?.title}</h1>
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