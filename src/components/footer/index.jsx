import React , { useState ,useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo/PlainLogo.png';
import logodark from '../../assets/images/logo/PlainLogo.png';

import './styles.scss'



function Footer(props) {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (

        <footer className="footer">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3 col-md-3">
                            <div className="widget widget-infor">
                                <div className="logo">
                                    <img className='logo-dark' src={logodark} alt="ubsec" style={{ maxWidth: '50px', height: 'auto' }} />
                                    <img className='logo-light' src={logo} alt="ubsec" style={{ maxWidth: '50px', height: 'auto' }} />
                                </div>
                                <p className="content">UBSEC is a platform for students to explore the field of cybersecurity, foster a community around technology and security, as well as equip students with the resources and networking opportunities to excel at the university and beyond.</p>
                                {/* <ul className="social-item">
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-telegram-plane"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                                    <li><Link to="#"><i className="icon-fl-tik-tok-2"></i></Link></li>
                                    <li><Link to="#"><i className="icon-fl-vt"></i></Link></li>
                                </ul> */}
                                <p className="copy-right">Copyright © 2024 UBSEC. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-5">
                            <div className="widget widget-menu">
                                <div className="menu menu-3">
                                    <h6 className="widget-title">Resoures</h6>
                                    <ul >
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/Eboard">Eboard</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="menu menu-4">
                                    <h6 className="widget-title">Important Links</h6>
                                    <ul >
                                        <li><Link to="/dashboard">Discord</Link></li>
                                        <li><Link to="/dashboard">UBLinked</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
           </footer>
    );
}

export default Footer;