import s from "./Loading.module.scss";

const Loading = () => {

    return (
        <div className={s["Loading"]}>
            <div className={s["Loading__Track"]}>
                <div className={s["Loading__Track__cover"]}></div>
                <div className={s["Loading__Track__name"]}></div>
                <div className={s["Loading__Track__artist"]}>
                    <div className={s["Loading__Track__artist__img"]}></div>
                    <div className={s["Loading__Track__artist__name"]}></div>
                </div>
            </div>
            <div className={s["Loading__Micro-Track"]}>
                <div className={s["Loading__Micro-Track__cover"]}></div>
                <div className={s["Loading__Micro-Track__info"]}>
                    <div className={s["Loading__Micro-Track__name"]}></div>
                    <div className={s["Loading__Micro-Track__artist"]}></div>
                </div>
            </div>
            <div className={s["Loading__Micro-Track"]}>
                <div className={s["Loading__Micro-Track__cover"]}></div>
                <div className={s["Loading__Micro-Track__info"]}>
                    <div className={s["Loading__Micro-Track__name"]}></div>
                    <div className={s["Loading__Micro-Track__artist"]}></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;

/* 
     _____     _____
    |  _  |   |  _  |
   -| | | |---| | | |-
    |_____| 7 |_____|  ~B!nro~
    
*/