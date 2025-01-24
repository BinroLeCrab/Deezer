import { useState } from "react";
import s from "./BgColor.module.scss";
import { prominent } from "color.js";

const BgColor= ({srcImg}) => {

    const [colorBG, setColorBG] = useState([[],[0, 0, 0]]);

    prominent(srcImg).then((color) => {
        setColorBG(color);
    });

    return (
        <div className={s["BgColor"]} style={{backgroundColor: `rgb(${colorBG[1][0]}, ${colorBG[1][1]}, ${colorBG[1][2]})`}}>
        </div>
    );
};

export default BgColor;

/* 
     _____     _____
    |  _  |   |  _  |
   -| | | |---| | | |-
    |_____| 7 |_____|  ~B!nro~
    
*/