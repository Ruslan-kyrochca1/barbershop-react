import React from "react";
import titleStyle from "../css/title.module.css";
import img1 from "../icon/advantages_1.png";
import img2 from "../icon/advantages_2.png";
import img3 from "../icon/advantages_3.png";


const Advantages = () => {
    return(
        <div className="advantages" id="advantages">
            <div className={titleStyle.title}>Почему мы?</div>
            <div className="advantages__items">
                <div className="advantages__1">
                    <div className="advantages__icon">
                        <img src={img1} alt="pofessional" className="advantages__img" />
                    </div>
                    <div className="advantages__descr">Команда профессионалов</div>
                </div>
                <div className="advantages__2">
                    <div className="advantages__icon">
                        <img src={img2} alt="friend" className="advantages__img" />
                    </div>
                    <div className="advantages__descr">Приятная обстановка</div>
                </div>
                <div className="advantages__3">
                    <div className="advantages__icon">
                        <img src={img3} alt="additional" className="advantages__img" />
                    </div>
                    <div className="advantages__descr">Закрываемся позже остальных</div>
                </div>
            </div>
        </div>
    )
}

export default Advantages