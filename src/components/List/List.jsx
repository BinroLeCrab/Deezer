import { useState, useEffect } from "react";
import './List.scss';
import Track from "../Track/Track";
import Loading from "../Loading/Loading";
import gsap from "gsap";

const List = ({ data, audio }) => {

    const [play, setPlay] = useState(false);

    const [loadFirst, setLoadFirst] = useState(false);

    const tl = gsap.timeline();

    useEffect(() => {
        if (data && !loadFirst) {
            tl.from(".gsap-list", {
                duration: 0.15,
                opacity: 0,
                stagger: 0.05
            });
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
                    <main className="List">
                        <Track variant="listFirst" id={0} data={data[0]} play={play} setPlay={setPlay} audio={audio} />
                        <div className="List__container">
                            <div>
                                <div className="List__title-container">
                                    <img src="/assets/favicon.ico" alt="" />
                                    <h1 className="List__title">Ma playlist coup de coeur</h1>
                                </div>
                                <div className="separator"></div>
                            </div>
                            <div className="List__track-container">
                                {
                                    data.map((track, index) => {
                                        if (index != 0) {
                                            return (
                                                <Track variant="listItem" id={index} key={index} data={track} play={play} setPlay={setPlay} audio={audio} />
                                            );
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </main>
                    : <Loading variant="list" />
            }
        </>
    );
};

export default List;