import { useState } from "react";
import './Gallery.scss';
import Track from "../Track/Track";

const Gallery = ({ data, audio }) => {

    const [play, setPlay] = useState(false);

    return (
        <>
            {
                data ?
                    <main className="Gallery__Main">
                        {
                            data.map((track, index) => {
                                return (
                                    <Track gallery key={index} id={index} data={track} play={play} setPlay={setPlay}  audio={audio} />
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