import React , { useState ,useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

// import logo from '../../assets/images/logo/logo.png';
// import logodark from '../../assets/images/logo/logo_dark.png';

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
                                {/* <div className="logo">
                                    <img id="logo_footer" className='logo-dark' src={logodark} alt="Binasea" />
                                    <img id="logo_footer" className='logo-light' src={logo} alt="Binasea" />
                                </div> */}
                                <p className="content">UBSEC is a platform for students to explore the field of cybersecurity, foster a community around technology and security.</p>
                                {/* <ul className="social-item">
                                    <li><Link to="#"><i className="fab fa-discord"></i></Link></li>
                                </ul> */}
                                <p className="copy-right">Copyright © 2024 UBSEC. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-5">
                            <div className="widget widget-menu">
                                <div className="menu menu-1">
                                    <h6 className="widget-title">Important Links</h6>
                                    <ul >
                                        <li><a href="https://discord.gg/THcrbZBPAJ">Discord Link</a></li>
                                        <li><a href="https://buffalo.campuslabs.com/engage/organization/ubsec">UBLinked Link</a></li>
                                        <li><a href="https://engineering.buffalo.edu/home/academics/beyond/clubs.host.html/content/shared/engineering/school-wide-content/clubs/seas/ubsec.detail.html">SEAS Website Link</a></li>
                                    </ul>
                                </div>
                                <div className="menu menu-2">
                                    <h6 className="widget-title">Resources</h6>
                                    <ul >
                                        <li><Link to="/about-us">About Us</Link></li>
                                        <li><Link to="/eboard">Eboard</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="menu menu-4">
                                    <h6 className="widget-title">Events</h6>
                                    <ul >
                                        <li><Link to="/events/spring-2024">Spring 2024</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="widget widget-subcribe">
                                <h6 className="widget-title">Email for queries</h6>
                                <p className="content">ubsec-club@buffalo.edu</p>
                                {/* <form action="#" id="subscribe-form">
                                    <input type="email" placeholder="Info@yourgmail.com" required="" id="subscribe-email" />
                                    <button className="tf-button" type="submit" id="subscribe-button"><i className="icon-fl-send"></i></button>
                                </form> */}
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