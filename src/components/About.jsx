import React from "react";
import titleStyle from "../css/title.module.css";
import about from "../img/about.jpg";


const About = () => {
    return(
        <div className="about" id="about">
            <div className={titleStyle.title}>О нас</div>
            <div className="about__container">
                <img src={about} alt="barbershop" className="information__img" />
                <div className="information__descr">
                    <div className="descr__first">Работаем с 2018 года</div>
                    <div className="descr__second">Мы всегда работали на совесть, а не на скорость, что позволило стать нам лучшими в Копейске</div>
                    <div className="descr__third">Ещё не были у нас?<br/>Тогда записывайтесь по номеру телефона или онлайн </div>
                </div>
            </div>
        </div>
    )
}

export default About