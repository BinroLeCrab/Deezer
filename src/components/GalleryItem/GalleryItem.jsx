import { useRef } from "react";
import s from "./GalleryItem.module.scss";

const GalleryItem = ({ data }) => {

    const infoBulleRef = useRef();

    const handleMouseMove = (e) => {

        const infoBulleObject = infoBulleRef.current;
        console.log(infoBulleRef.current.offsetTop);
        infoBulleObject.style.display= "block";
        infoBulleObject.style.top = `${e.pageY + 12}px`;
        infoBulleObject.style.left = `${e.pageX + 12}px`;

        if(infoBulleObject.offsetLeft > (window.innerWidth - 100)) {
            console.log("dans le if");
            infoBulleObject.style.left= `${e.pageX - infoBulleObject.offsetWidth - 12}px`;
        }
    };

    return (
        <>
            <div ref={infoBulleRef} className={s['GalleryItem__Info']}>
                <p>{data?.title} - {data?.artist?.name}</p>
            </div>
            <div className={s['GalleryItem']} onMouseMove={handleMouseMove} onMouseLeave={() => infoBulleRef.current.style.display= "none"}>
                <img src={data?.album?.cover_medium || "assets/placeholderImg.jpg"} alt={`${data?.title} - ${data?.artist?.name}`} />
            </div>
        </>
    );
};

export default GalleryItem;