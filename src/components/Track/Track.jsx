import s from "./Track.module.scss";

const Track = ({ data }) => {

    return (
        <div>
            <img src={data?.album?.cover_big} alt="" />
            <h1>{data?.title}</h1>
            <div>
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