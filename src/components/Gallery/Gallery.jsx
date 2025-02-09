import { useState, useEffect } from "react";
import './Gallery.scss';
import Track from "../Track/Track";
import Loading from "../Loading/Loading";
import gsap from "gsap";

const Gallery = ({ data, audio }) => {

    const [play, setPlay] = useState(false);
    const [loadFirst, setLoadFirst] = useState(false);

    const tl = gsap.timeline();

    useEffect(() => {
        if (data && !loadFirst) {
            if (window.innerWidth > 610) {
                tl.from(".gsap-gallery", {
                    duration: 0.15,
                    opacity: 0,
                    stagger: 0.01
                });
            } else {
                tl.from(".gsap-gallery", {
                    duration: 0.15,
                    opacity: 0,
                    stagger: 0.03
                });
            }
            setLoadFirst(true);
        }
    }), [data];

    useEffect(() => {
        audio.pause();
        audio.src = "";
    }, []);

    return (
        <>
            {
                data ?
                    <main className="Gallery">
                        <div className="Gallery__Filter"></div>
                        {
                            data.map((track, index) => {
                                return (
                                    <Track variant="gallery" key={index} id={index} data={track} play={play} setPlay={setPlay} audio={audio} />
                                )
                            })
                        }
                    </main>
                    : <Loading variant="gallery" />
            }
        </>
    );
};

export default Gallery;