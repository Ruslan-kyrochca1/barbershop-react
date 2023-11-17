import React from "react";
import Menu from "./Menu.jsx";
import Burger from "./Burger.jsx";
import location from "../icon/location.png";
import time from "../icon/time.png";


const Header = () => {
    return(
        <header>
            <Menu/>
            <Burger/>
            <h1 className="title">Uginman</h1>
            <h2 className="subtitle">Первый и лучший </h2>
            <h3 className="descr">барбершоп в Копейске</h3>
            <div className="header__information">
                <div className="location">
                    <img src={location} alt="location" className="location__icon" />
                    <div className="location__descr">пр. Коммунистический 27<br/>пр. Победы, 17.</div>
                </div>
                <div className="time">
                    <img src={time} alt="time" className="time__icon" />
                    <div className="time__descr">9:00 - 21:00 <br/>без перерывов</div>
                </div>
            </div>
        </header>
    )
}

export default Header