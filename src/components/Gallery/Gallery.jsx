import { useEffect } from "react";

const Gallery = ({data}) => {

    useEffect(() => {
        console.log("data gallery", data);
    }, [data]);

    return (
        <>
            {
                data ? data.map((track, index) => {
                    return (
                        <div key={index}>
                            <p>{track?.title}</p>
                            <img src={track?.album?.cover} alt={track?.title} />
                        </div>
                    )
                })
                : <p>Récupération des données...</p>
            }
        </>
    );
};

export default Gallery;