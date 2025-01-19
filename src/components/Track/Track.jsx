import s from "./Track.module.scss";

const Track = ({ data }) => {

    return (
        <div className={s["Track"]}>
            <img className={s['Track__cover']} src={data?.album?.cover_big} alt="" />
            <h1 className={s['Track__name']} >{data?.title}</h1>
            <div className={s['Track__artist']}>
                <img src={data?.artist?.picture_small} alt="" />
                <p>{data?.artist?.name}</p>
            </div>

            <audio controls>
                <source src={data?.preview} type="audio/mp3" />
            </audio>
        </div>
    );
};

export default Track;