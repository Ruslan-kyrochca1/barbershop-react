import React from "react";
import whatsapp from "../icon/watsapp.png"
import vk from "../icon/vk.png"
import tiktok from "../icon/tiktok.png"

const Footer = () => {
    return(
        <div className="footer">
            <div className="social-link">
                <div className="media-link">
                    <a href="https://api.whatsapp.com/send/?phone=73517017107&text=Привет%21+Хочу+записаться%21&type=phone_number&app_absent=0" className="whatsapp"><img src={whatsapp} alt="whatsapp" /></a>
                    <a href="https://vk.com/barbershop_uginman" className="vk"><img src={vk} alt="vk" /></a>
                    <a href="https://www.tiktok.com/@barbershop_uginman" className="tiktok"><img src={tiktok} alt="tiktok" /></a>
                </div>
                <a href="tel:+78800808329"><div className="number">+7-351-701-71-07</div></a>
            </div>
            <div className="footer-information">© Все фотоматериалы и информационная часть веб-сайта принадлежат их владельцам.</div>
        </div>
    )
}

export default Footer