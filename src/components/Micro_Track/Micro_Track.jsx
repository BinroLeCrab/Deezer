import s from "./Micro_track.module.scss";

const Micro_track = ({ data }) => {

    return (
        <div className={s["Micro-Track"]}>
            <img className={s["Micro-Track__cover"]} src={data?.album?.cover} alt="" />
            <div className={s["Micro-Track__info"]}>
                <h2 className={s["Micro-Track__name"]}>{data?.title}</h2>
                <p className={s["Micro-Track__artist"]}>{data?.artist?.name}</p>
            </div>
        </div>
    );
};

export default Micro_track;