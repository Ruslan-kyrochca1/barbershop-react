import React, {useState} from "react";
import titleStyle from "../css/title.module.css";
import serves1 from "../icon/serves_1.png"
import serves2 from "../icon/serves_2.png"
import serves3 from "../icon/serves_3.png"
import serves4 from "../icon/serves_4.png"
import serves5 from "../icon/serves_5.png"

const Services = () => {
    function changeItemsPassive(){
        setActiveStateHaircut(prev=>prev = false)
        setActiveStateBeard(prev=>prev = false)
        setActiveStateService(prev=>prev = false)
        setActiveStateColoring(prev=>prev = false)
        setActiveStateExtra(prev=>prev = false)
    }
    const [activeStateHaircut, setActiveStateHaircut] = useState(true)
    function changeActiveTitleHaircut(){
        changeItemsPassive();
        setActiveStateHaircut(prev=>prev = true)
    }
    const [activeStateBeard, setActiveStateBeard] = useState(false)
    function changeActiveTitleBeard(){
        changeItemsPassive();
        setActiveStateBeard(prev=>prev = true);
    }
    const [activeStateService, setActiveStateService] = useState(false)
    function changeActiveTitleService(){
        changeItemsPassive();
        setActiveStateService(prev=>prev = true);
    }
    const [activeStateColoring, setActiveStateColoring] = useState(false)
    function changeActiveTitleColoring(){
        changeItemsPassive();
        setActiveStateColoring(prev=>prev = true);
    }
    const [activeStateExtra, setActiveStateExtra] = useState(false)
    function changeActiveTitleExtra(){
        changeItemsPassive();
        setActiveStateExtra(prev=>prev = true);
    }
    return(
        <div className="services" id="services">
            <div className={titleStyle.title}>Наши услуги</div>
            <div className="services__titles">
                <div className={`services__title ${activeStateHaircut ? 'services__title_active' : ''}`} onClick={changeActiveTitleHaircut}>Стрижки</div>
                <div className={`services__title ${activeStateBeard ? 'services__title_active' : ''}`} onClick={changeActiveTitleBeard}>Оформление бороды</div>
                <div className={`services__title ${activeStateService ? 'services__title_active' : ''}`} onClick={changeActiveTitleService}>Комплексные услуги</div>
                <div className={`services__title ${activeStateColoring ? 'services__title_active' : ''}`} onClick={changeActiveTitleColoring}>Камуфляж-окрашивание</div>
                <div className={`services__title ${activeStateExtra ? 'services__title_active' : ''}`} onClick={changeActiveTitleExtra}>Дополнительные услуги</div>
            </div>
            <div className={`services__item ${activeStateHaircut ? 'services__item_active' : ''}`}>
                <div className="services__container services__container-haircut">
                    <div className="services__descr">
                        <div className="services__icon">
                            <img src={serves1} alt="haircuts" />
                        </div>
                        <div className="services__name">
                            Мужская стрижка <br/>
                            Женский Фэйд <br/>
                            Детская стрижка <br/>
                            Стрижка одной насадкой <br/>
                            Укладка/окантовка <br/>
                            Бритьё головы <br/>
                            Химическая завивка 
                        </div>
                    </div>
                    <div className="service__price">
                        750 – 1 000 <br/>
                        1 000 – 1 500 <br/>
                        550 – 650 <br/>
                        450 <br/>
                        350 <br/>
                        600 – 800 <br/>
                        1500 - 3500 
                    </div>
                </div>
            </div>
            <div className={`services__item ${activeStateBeard ? 'services__item_active' : ''}`}>
                <div className="services__container services__container-beard">
                    <div className="services__descr">
                        <div className="services__icon">
                            <img src={serves2} alt="Bearded man" />
                        </div>
                        <div className="services__name">
                            Оформление бороды <br/>
                            Оформление бороды + бритье <br/>
                            Бритьё бороды 
                        </div>
                    </div>
                    <div className="service__price">
                        400 – 600 <br/>
                        500 – 700 <br/>
                        600 
                    </div>
                </div>
            </div>
            <div className={`services__item ${activeStateService ? 'services__item_active' : ''}`}>
                <div className="services__container services__container-service">
                    <div className="services__descr">
                        <div className="services__icon">
                            <img src={serves3} alt="book" />
                        </div>
                        <div className="services__name">
                            Отец+Сын <br/>
                            2 друга <br/>
                            Стрижка + Борода <br/>
                            Стрижка+Борода + бритье 
                        </div>
                    </div>
                    <div className="service__price">
                        1 200 <br/>
                        1 300 <br/>
                        1 000 – 1 300 <br/>
                        1 100 – 1 300 
                    </div>
                </div>
            </div>
            <div className={`services__item ${activeStateColoring ? 'services__item_active' : ''}`}>
                <div className="services__container services__container-coloring">
                    <div className="services__descr">
                        <div className="services__icon">
                            <img src={serves4} alt="Man with good hair" />
                        </div>
                        <div className="services__name">
                            Камуфляж головы <br/>
                            Камуфляж бороды <br/>
                            Окрашивание 
                        </div>
                    </div>
                    <div className="service__price">
                        700 – 1 000 <br/>
                        500 – 600 <br/>
                        2 500 – 5 000 
                    </div>
                </div>
            </div>
            <div className={`services__item ${activeStateExtra ? 'services__item_active' : ''}`}>
                <div className="services__container services__container-extra">
                    <div className="services__descr">
                        <div className="services__icon">
                            <img src={serves5} alt="signboard" />
                        </div>
                        <div className="services__name">
                            Мытьё головы/дополнительно <br/>
                            Скрабирование кожи головы <br/>
                            Черная маска <br/>
                            Брови <br/>
                            Пилинг-скатка <br/>
                            Патчи <br/>
                            Детский рисунок <br/>
                            Удаление воском 
                        </div>
                    </div>
                    <div className="service__price">
                        50 <br/>
                        350 <br/>
                        300 <br/>
                        50 – 100 <br/>
                        300 <br/>
                        50 <br/>
                        100 <br/>
                        300 - 800 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services