import React from "react";
import {useState} from "react";
import logo from "../icon/logo.png"


const Burger = () => {
    let [activeState, setActiveState] = useState(false)
    const change = () =>{
        setActiveState(x=>{
            return !x
            })
    }
    return(
        <div className="menu-burger">
            <div className={`line ${activeState ? 'line_active' : ''}`}onClick={change}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            <div className={`burger ${activeState ? 'burger_active' : ''}`} >
                <a href="/#"><div className="logo"><img src={logo} alt="logo" /></div></a>
                <a href="#about">О нас</a><br/>
                <a href="#services">Услуги</a><br/>
                <a href="#example">Наши работы</a><br/>
                <a href="https://n111212.yclients.com/" className="online"><div>Онлайн запись</div></a>
                <a href="tel:+73517017107"><div className="number">+7-351-701-71-07</div></a>
            </div>
        </div>
    )
}

export default Burger