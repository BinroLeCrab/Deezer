import s from "./Micro_track.module.scss";

const Micro_track = ({ data }) => {

    return (
        <div className={s["Micro-Track"]}>
            <img className={s["Micro-Track__cover"]} src={data?.album?.cover} alt="" />
            <div className={s["Micro-Track__info"]}>
                <a href={data?.link} target="_blank">
                    <h2 className={s["Micro-Track__name"]}>{data?.title}</h2>
                </a>
                <a href={data?.artist?.link} target="_blank" className={s["Micro-Track__artist"]}>{data?.artist?.name}</a>
            </div>
        </div>
    );
};

export default Micro_track;