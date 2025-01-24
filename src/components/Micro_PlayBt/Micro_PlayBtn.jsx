import s from "./Micro_PlayBtn.module.scss";

const Micro_PlayBtn = ({ handleClick, play, idTrack }) => {
    

    return (
        <button
            className={`${s["PlayBtn"]} ${play === idTrack ? s["PlayBtn--play"] : ""}`}
            title={play ? "pause" : "lecture"}
            onClick={() => handleClick()}
        >
            {play === idTrack ?
                <img src="/assets/pause.svg" alt="" /> :
                <img src="/assets/play.svg" alt="" />}
        </button>
    );
};

export default Micro_PlayBtn;

/* 
     _____     _____
    |  _  |   |  _  |
   -| | | |---| | | |-
    |_____| 7 |_____|  ~B!nro~
    
*/