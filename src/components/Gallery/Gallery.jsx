import { useEffect } from "react";
import './Gallery.scss';
import GalleryItem from "../GalleryItem/GalleryItem";

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
                                    <GalleryItem data={track} key={index} />
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