import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import PlayBtn from "../PlayBtn/PlayBtn";
import s from "./Track.module.scss";
import { Pause, Play } from "@phosphor-icons/react";

const Track = ({
    id,
    data,
    play,
    setPlay,
    variant,
    audio,
}) => {

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
        if (variant === "micro") {
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
                variant === "micro" ? (
                    <>
                        <div className={s["Micro-Track"]}>
                            <div className={s["Micro-Track__cover-wrapper"]}>
                                {data.preview &&
                                    <div ref={wrapper} className={`${s["Micro-Track__btn-wrapper"]} ${play === id && s['Micro-Track__btn-wrapper--play']}`}>
                                        <PlayBtn micro handleClick={handleClick} play={play} idTrack={id} />
                                    </div>
                                }
                                <img className={s["Micro-Track__cover"]} src={data?.album?.cover || "assets/placeholderImg.jpg"} alt="" loading="lazy" />
                            </div>
                            <div className={s["Micro-Track__info"]}>
                                <a href={data?.link} target="_blank">
                                    <h2 className={`${s["Micro-Track__name"]}  ${play === id && s['Micro-Track__name--play']}`}>{data?.title}</h2>
                                </a>
                                <a href={data?.artist?.link} target="_blank" className={s["Micro-Track__artist"]}>{data?.artist?.name}</a>
                            </div>
                        </div>
                    </>
                ) : variant === "gallery" ? (
                    <>
                        <div ref={infoBulleRef} className={s['Gallery-Track__Info']}>
                            <p>{data?.title} - {data?.artist?.name}</p>
                        </div>
                        {
                            data.preview ? (
                                <div ref={wrapper} onClick={handleClick} className={`${s["Gallery-Track"]} ${play === id && s['Gallery-Track--play']} gsap-gallery`} onMouseMove={handleMouseMove} onMouseLeave={() => infoBulleRef.current.style.display = "none"}>
                                    <img src={data?.album?.cover_medium || "assets/placeholderImg.jpg"} alt={`${data?.title} - ${data?.artist?.name}`} loading="lazy" />
                                    {play === id ? <Pause className={s["Gallery-Track__PlayPause"]} size={42} weight="fill" />
                                        : <Play className={s["Gallery-Track__PlayPause"]} size={42} weight="fill" />
                                    }
                                </div>
                            ) : (
                                <div ref={wrapper} className={`${s["Gallery-Track"]} ${s['Gallery-Track--noplay']} gsap-gallery`} onMouseMove={handleMouseMove} onMouseLeave={() => infoBulleRef.current.style.display = "none"}>
                                    <img src={data?.album?.cover_medium || "assets/placeholderImg.jpg"} alt={`${data?.title} - ${data?.artist?.name}`} loading="lazy" />
                                </div>
                            )
                        }
                    </>
                ) : variant === "listFirst" ? (
                    <>
                        <div
                            className={s["List-First"]}
                            style={{
                                background: `url(${data?.album?.cover_xl || "assets/placeholderImg.jpg"})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                        >
                            <div className={s["List-First__info-wrapper"]}>
                                <div className={s["List-First__info"]}>
                                    <a href={data?.link} target="_blank" className={`${play === id && s['List-First__name--play']}`} >
                                        <h2 className={`${s['List-First__name']} ${play === id && s['List-First__name--play']}`} >
                                            <span className="italic">#{id < 10 ? "00" : id < 100 ? 0 : ""}{id + 1} </span>
                                            {data?.title}
                                        </h2>
                                    </a>
                                    <div className={s['List-First__artist']}>
                                        <img src={data?.artist?.picture_small} alt="" loading="lazy" />
                                        <a href={data?.artist?.link} target="_blank">{data?.artist?.name}</a>
                                    </div>
                                </div>
                                <div ref={wrapper} className={`${s["List-First__btn-wrapper"]} ${play === id && s["List-First__btn-wrapper--play"]}`}>
                                    {data.preview &&
                                        <div>
                                            <PlayBtn handleClick={handleClick} play={play} idTrack={id} />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                ) : variant === "listItem" ? (
                    <>
                        <div className={`${s["listItem"]} gsap-list`}>
                            <span className={`italic ${s["listItem__number"]}`}>#{id < 9 ? "00" : id < 99 ? 0 : ""}{id + 1} </span>
                            <div className={s["listItem__cover-wrapper"]}>
                                {data.preview &&
                                    <div ref={wrapper} className={`${s["listItem__btn-wrapper"]} ${play === id && s['listItem__btn-wrapper--play']}`}>
                                        <PlayBtn micro handleClick={handleClick} play={play} idTrack={id} />
                                    </div>
                                }
                                <img className={s["listItem__cover"]} src={data?.album?.cover || "assets/placeholderImg.jpg"} alt="" loading="lazy" />
                            </div>
                            <div className={s["listItem__info"]}>
                                <a href={data?.link} target="_blank">
                                    <h2 className={`${s["listItem__name"]}  ${play === id && s['listItem__name--play']}`}>{data?.title}</h2>
                                </a>
                                <a href={data?.artist?.link} target="_blank" className={s["listItem__artist"]}>{data?.artist?.name}</a>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={s["Track"]}>
                            <div
                                className={s["Track__cover-wrapper"]}
                                ref={wrapper}
                            >
                                {data.preview ?
                                    <>
                                        <img onClick={handleClick} className={`${s['Track__cover']} ${play === id && s['Track__cover--play']}`} src={data?.album?.cover_big || "assets/placeholderImg.jpg"} alt="" />
                                        <PlayBtn cover handleClick={handleClick} play={play} idTrack={id} />
                                    </>
                                    :
                                    <img className={`${s['Track__cover']}`} src={data?.album?.cover_big || "assets/placeholderImg.jpg"} alt="" />
                                }
                            </div>
                            <a href={data?.link} target="_blank" className={`${play === id && s['Track__name--play']}`} >
                                <h1 className={`${s['Track__name']} ${play === id && s['Track__name--play']}`} >{data?.title}</h1>
                            </a>
                            <div className={s['Track__artist']}>
                                <img src={data?.artist?.picture_small} alt="" loading="lazy" />
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