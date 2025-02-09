import { Browser, GithubLogo, Info, LinkedinLogo, XCircle } from "@phosphor-icons/react";
import s from "./InfoPopUp.module.scss";
import { useState } from "react";

const InfoPopUp = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <button className={s["InfoPopUp--Btn"]} onClick={() => setOpen(!open)}>
                {open ? <XCircle size={36} />
                    : <Info size={36} />}
            </button>

            {open && (
                <>
                    <div className={s["InfoPopUp--Overlay"]} onClick={() => setOpen(false)}></div>
                    <div className={s["InfoPopUp"]}>
                        <div className={s["InfoPopUp__content"]}>
                            <h1>💿 Deezer Favorites</h1>
                            <p>Micro-projet en React.js utilisant l'API Deezer pour afficher ma playlist coup de coeur de l'ajout le plus récent au plus ancien.</p>
                            <p>3 affichages (3 derniers titres ajoutés, gallerie, liste) permettent de la visualiser sous différentes mises en page.</p>
                            <ul>
                                <li>📅 Février 2025</li>
                                <li>🧑‍🚀 <a href="https://robinvigier.fr" target="__blank">Robin Vigier</a></li>
                                <li>⚛️React, ⚡Vite, 🦸GSAP, 🖌️Sass, 🚀fetchJsonp</li>
                            </ul>
                        </div>
                        <div className={s["InfoPopUp__social"]}>
                            <img className={s["InfoPopUp__social__picture"]} src="https://avatars.githubusercontent.com/u/144124953?v=4" alt="" />
                            <div className={s["InfoPopUp__social__name"]}>
                                <h2>Robin Vigier</h2>
                                <a href="https://github.com/BinroLeCrab" className="italic" target="__blank">@BinroLeCrab</a>
                                <p>🧑‍🚀 Développeur Front-End</p>
                            </div>
                            <div className={s["InfoPopUp__social__links"]}>
                                <a className={`${s["InfoPopUp__social__links__Item"]} ${s["prtf"]}`} href="" target="__blank" title="Mon Portfolio">
                                    <Browser weight="bold" size={28} />
                                </a>
                                <a className={`${s["InfoPopUp__social__links__Item"]} ${s["lkdin"]}`} href="" target="__blank" title="Mon Linkedin">
                                    <LinkedinLogo weight="bold" size={28} />
                                </a>
                                <a className={`${s["InfoPopUp__social__links__Item"]} ${s["git"]}`} href="https://github.com/BinroLeCrab" target="__blank" title="Mon Github">
                                    <GithubLogo weight="bold" size={28} />
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default InfoPopUp;

/* 
     _____     _____
    |  _  |   |  _  |
   -| | | |---| | | |-
    |_____| 7 |_____|  ~B!nro~
    
*/