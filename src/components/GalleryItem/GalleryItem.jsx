import s from "./GalleryItem.module.scss";

const GalleryItem = ({ data }) => {

    return (
        <div className={s['GalleryItem']}>
            <img src={data?.album?.cover_big || "placeholderImg.img"} alt={`${data?.title} - ${data?.artist?.name}`} />
        </div>
    );
};

export default GalleryItem;