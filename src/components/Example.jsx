import React from "react";
import titleStyle from "../css/title.module.css";
import Carousel from "./Carousel";
import imgForSlider1 from"../img/slider_1.jpg"
import imgForSlider2 from"../img/slider_2.jpg"
import imgForSlider3 from"../img/slider_3.jpg"
import imgForSlider4 from"../img/slider_5.jpg"
import imgForSlider5 from"../img/slider_7.jpg"
import imgForSlider6 from"../img/slider_8.jpg"
import imgForSlider7 from"../img/slider_9.jpg"
import imgForSlider8 from"../img/slider_10.jpg"
import imgForSlider9 from"../img/slider_11.jpg"


const Example = () => {
    return(
        <div className="slider" id = "example">
            <div className={titleStyle.title}>Наши работы</div>
            <Carousel>
                <img src={imgForSlider1} alt="People with hairstyle" className="slider__img" id="imgWidth"/>
                <img src={imgForSlider2} alt="People with hairstyle" className="slider__img" />
                <img src={imgForSlider3} alt="People with hairstyle" className="slider__img" />
                <img src={imgForSlider4} alt="People with hairstyle" className="slider__img" />
                <img src={imgForSlider5} alt="People with hairstyle" className="slider__img" />
                <img src={imgForSlider6} alt="People with hairstyle" className="slider__img" />
                <img src={imgForSlider7} alt="People with hairstyle" className="slider__img" />
                <img src={imgForSlider8} alt="People with hairstyle" className="slider__img" />
                <img src={imgForSlider9} alt="People with hairstyle" className="slider__img" />
            </Carousel>
        </div>
    )
}

export default Example