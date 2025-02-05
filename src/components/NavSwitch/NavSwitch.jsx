import s from "./NavSwitch.module.scss";

const NavSwitch = ({handleClick}) => {

    return (
        <nav className={s['NavSwitch']}>
            <button onClick={() => handleClick('latest')}>Latest</button>
            <button onClick={() => handleClick('gallery')}>Gallery</button>
        </nav>
    );
};

export default NavSwitch;