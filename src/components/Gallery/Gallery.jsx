import { useEffect } from "react";
import './Gallery.scss';

const Gallery = ({ data }) => {

    useEffect(() => {
        console.log("data gallery", data);
    }, [data]);

    return (
        <>
            {
                data ?
                    <main className="Gallery__Main">
                        {
                            data.map((track, index) => {
                                return (
                                    <div className="Gallery__div" key={index}>
                                        {/* <p>#{index} - {track?.title}</p> */}
                                        <img src={track?.album?.cover_medium} alt={track?.title} />
                                    </div>
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