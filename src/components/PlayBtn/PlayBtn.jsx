import s from "./PlayBtn.module.scss";

const PlayBtn = ({ handleClick, play }) => {
    

    return (
        <button
            className={`${s["PlayBtn"]} ${play ? s["PlayBtn--play"] : ""}`}
            title={play ? "pause" : "lecture"}
            onClick={() => handleClick()}
        >
            {play ?
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