import React, { useState } from "react";
import sliderArrow from "../icon/slider.png"
import getWidhtImg from "../js/width";

const Carousel = ({children}) => {
    
    let widthItem = 250;
    let width_container = children.length * widthItem;
    const [offset, setOffset] = useState(0);
    const leftArrowClick = () => {
        let widthItem = getWidhtImg();
        setOffset(countOffset =>{
            const newOffset = countOffset + widthItem 
            return Math.min(newOffset, 0)
        })
    }
    const rightArrowClick = () =>{
        let widthItem = getWidhtImg();
        let width_container = children.length * widthItem;
        setOffset(countOffset =>{
            const newOffset = countOffset - widthItem 
            const maxWidth = - (width_container - widthItem*4)
            return Math.max(newOffset, maxWidth)
        })
    }

    return(
        <div className="main-container">
            <div className="arrow-left" onClick={leftArrowClick}><img src={sliderArrow} alt="Left arrow" className="arrow-left__img" /></div>
            <div className="slider__container">
                <div className="slider__item"
                style={{
                    transform: `translateX(${offset}px)`,
                    width: `${width_container}px`
                }}
                >
                    {children}
                </div>
            </div>
            <div className="arrow-right" onClick={rightArrowClick}><img src={sliderArrow} alt="Right arrow" className="arrow-right__img" /></div>
        </div>
    )
}

export default Carousel