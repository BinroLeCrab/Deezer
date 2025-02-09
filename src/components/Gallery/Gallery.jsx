import { useState, useEffect } from "react";
import './Gallery.scss';
import Track from "../Track/Track";

const Gallery = ({ data, audio }) => {

    const [play, setPlay] = useState(false);

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
                    : <p>Récupération des données...</p>
            }
        </>
    );
};

export default Gallery;