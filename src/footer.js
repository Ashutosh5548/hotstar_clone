import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                        <a href="/careers">
                            <p>Careers</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>View Website in</h4>
                        <p>English</p>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Need Help?</h4>
                        <a href="/helpcentre">
                            <p>Visit Help Centre</p>
                        </a>
                        <a href="/feedback">
                            <p>Share Feedback</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Connect with Us</h4>
                        <a href="/facebook">
                            <p>Facebook</p>
                        </a>
                        <a href="/twitter">
                            <p>Twitter</p>
                        </a>
                    </div>
                </div>
                <hr></hr>

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} STAR. All Rights Reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>Terms of use</p></div></a>
                        <a href="/policy"><div><p>Privacy Policy</p></div></a>
                        <a href="/faq"><div><p>FAQ</p></div></a>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Footer;