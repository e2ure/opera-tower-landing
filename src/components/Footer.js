import React from "react";
import "./Footer.css";
import { MdToken } from "react-icons/md";
import { IconName, SiFacebook, SiInstagram } from "react-icons/si";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-socials">
                <h5>Siguenos en
                    <SiFacebook className="socials-icon" />
                    <SiInstagram className="socials-icon" />
                </h5>

            </div>
            <div className="footer-developer">
                <h6>Desarrollado por &nbsp;
                    <a href="www.bccrguys.com">BccrGuys
                        <MdToken className="developer-icon" />
                    </a>
                </h6>
            </div>
        </footer>
    )

};

export default Footer;