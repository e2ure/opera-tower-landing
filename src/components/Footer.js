import React from "react";
import "./Footer.css";
import { MdToken } from "react-icons/md";
import { SiFacebook, SiInstagram } from "react-icons/si";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-socials">
                <h5>Siguenos en
                    <a href="www.feisbu.com/opera-tower">
                        <SiFacebook className="socials-icon" />
                    </a>
                    <a href="www.insta.com/opera-tower">
                        <SiInstagram className="socials-icon" />
                    </a>
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