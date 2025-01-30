import s from "./PlayBtn.module.scss";

const PlayBtn = ({ handleClick, play, idTrack, micro }) => {


    return (
        <button
            className={micro ?
                `${s["Micro-PlayBtn"]} ${play === idTrack ? s["Micro-PlayBtn--play"] : ""}`
                : `${s["PlayBtn"]} ${play === idTrack ? s["PlayBtn--play"] : ""}`
            }
            title={play ? "pause" : "lecture"}
            onClick={() => handleClick()}
        >
            {play === idTrack ?
                <img src="/assets/pause.svg" alt="" /> :
                <img src="/assets/play.svg" alt="" />}
        </button>
    );
};

export default PlayBtn;

/* 
     _____     _____
    |  _  |   |  _  |
   -| | | |---| | | |-
    |_____| 7 |_____|  ~B!nro~
    
*/