import { useEffect, useState } from "react";
import s from "./Loading.module.scss";

const Loading = ({ variant }) => {

    return (
        <>
            {variant === "latest" ? (

                <div className={s["Loading-Latest"]}>
                    <div className={s["Loading-Latest__Track"]}>
                        <div className={s["Loading-Latest__Track__cover"]}></div>
                        <div className={s["Loading-Latest__Track__name"]}></div>
                        <div className={s["Loading-Latest__Track__artist"]}>
                            <div className={s["Loading-Latest__Track__artist__img"]}></div>
                            <div className={s["Loading-Latest__Track__artist__name"]}></div>
                        </div>
                    </div>
                    <div className={s["Loading-Latest__Micro-Track"]}>
                        <div className={s["Loading-Latest__Micro-Track__cover"]}></div>
                        <div className={s["Loading-Latest__Micro-Track__info"]}>
                            <div className={s["Loading-Latest__Micro-Track__name"]}></div>
                            <div className={s["Loading-Latest__Micro-Track__artist"]}></div>
                        </div>
                    </div>
                    <div className={s["Loading-Latest__Micro-Track"]}>
                        <div className={s["Loading-Latest__Micro-Track__cover"]}></div>
                        <div className={s["Loading-Latest__Micro-Track__info"]}>
                            <div className={s["Loading-Latest__Micro-Track__name"]}></div>
                            <div className={s["Loading-Latest__Micro-Track__artist"]}></div>
                        </div>
                    </div>
                </div>

            ) : variant === "gallery" ? (

                <div className={s["Loading-Gallery"]}>
                    {Array.from({ length: 77 }).map((_, index) => (
                        <div key={index} className={s["Loading-Gallery__Track"]}></div>
                    ))}
                </div>

            ) : variant === "list" ? (

                <div className={s["Loading-List"]}>
                    <div className={s["Loading-List__First"]}>
                        <div className={s["Loading-List__First__info-wrapper"]}>
                            <div className={s["Loading-List__First__name"]}></div>
                            <div className={s["Loading-List__First__artist"]}>
                                <div className={s["Loading-List__First__artist__img"]}></div>
                                <div className={s["Loading-List__First__artist__name"]}></div>
                            </div>
                        </div>
                    </div>
                    <div className={s["Loading-List__Container"]}>
                        <div className={s["Loading-List__Container__title-container"]}>
                            <div className={s["Loading-List__Container__icon"]}></div>
                            <div className={s["Loading-List__Container__title"]}></div>
                        </div>
                        <div className="separator"></div>
                        <div className={s["Loading-List__Track-Container"]}>
                            {Array.from({ length: 20 }).map((_, index) => (
                                <div key={index} className={s["Loading-List__Track-Container__Track"]}>
                                    <div className={s["Loading-List__Track-Container__Track__number"]}></div>
                                    <div className={s["Loading-List__Track-Container__Track__cover"]}></div>
                                    <div className={s["Loading-List__Track-Container__Track__info"]}>
                                        <div className={s["Loading-List__Track-Container__Track__name"]}></div>
                                        <div className={s["Loading-List__Track-Container__Track__artist"]}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            ) : ""
            }
        </>
    );
};

export default Loading;

/* 
     _____     _____
    |  _  |   |  _  |
   -| | | |---| | | |-
    |_____| 7 |_____|  ~B!nro~
    
*/