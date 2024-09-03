import React from 'react'
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"


const Footer = () => {
    return (
        <footer>
        <div className="footer-container ">
            <div className="footer-links ">
                <h2>QUCK LINKS</h2>
                <p>
                    <li>Privacy Policy</li>
                    <li>FAQ & Return Policy</li>
                    <li>Terms Of Service</li>
                    <li>Refund Policy</li>
                    <li>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</li>
                </p>
            </div>

            <div className="footer-links ">
                <h2 text-align: left> OUR SOCIAL MEDIA</h2>
                <th><img src={facebook} alt=" " /></th>
                <th><img src={instagram} alt=""/></th>
            </div>

        </div>
    </footer>
    );
};
    

export default Footer;