import React from "react";
import logo from "../icon/logo.png";


const Menu = () => {
    return(
        <div className="menu">
            <div className="menu__item">
                <a href="#about">О нас</a>
                <a href="#services">Услуги</a>
                <a href="#example">Наши работы</a>
            </div>
            <a href="/#"><div className="logo"><img className="logo-img" src={logo} alt="logo" /></div></a>
            <div className="menu__link">
                <a href="https://n111212.yclients.com/" className="online"><div>Онлайн запись</div></a>
                <a href="tel:+73517017107"><div className="number">+7-351-701-71-07</div></a>
            </div>
        </div>
    )
}

export default Menu