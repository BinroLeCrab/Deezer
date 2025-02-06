import { ClockCounterClockwise, SquareHalf, SquaresFour } from "@phosphor-icons/react";
import s from "./NavSwitch.module.scss";

const NavSwitch = ({handleClick, page}) => {

    return (
        <nav className={s['NavSwitch']}>
            <button className={`${s['NavSwitch__Btn']} ${page === 'latest' && s['NavSwitch__Btn--active']}`} onClick={() => handleClick('latest')}>
                <ClockCounterClockwise size={36} />
            </button>
            <button className={`${s['NavSwitch__Btn']} ${page === 'gallery' && s['NavSwitch__Btn--active']}`} onClick={() => handleClick('gallery')}>
                <SquaresFour size={36} />
            </button>
            <button className={`${s['NavSwitch__Btn']} ${page === 'list' && s['NavSwitch__Btn--active']}`} onClick={() => handleClick('list')}>
                <SquareHalf size={36} />
            </button>
        </nav>
    );
};

export default NavSwitch;