import { useState, useEffect } from "react";
import './List.scss';
import Track from "../Track/Track";

const List = ({ data, audio }) => {

    const [play, setPlay] = useState(false);

    useEffect(() => {
        audio.pause();
        audio.src = "";
    }, []);

    return (
        <>
            {
                data ?
                    <main className="List">
                        <div 
                            className="List__First"
                            style={{
                                background: `url(${data[0]?.album?.cover_xl})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}    
                        >
                            <div>
                                <p>{data[0]?.title}</p>
                            </div>
                        </div>
                    </main>
                    : <p>Récupération des données...</p>
            }
        </>
    );
};

export default List;