import React from 'react';
import { Link } from 'react-router-dom';
import Full_Logo from '../assets/images/logo/Full_Logo.png';
import aboutData from '../assets/data/about-data'; // Make sure this path is correct

function About() {
    return (
        <div>
            <section className="tf-page-title style-2">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumbs">
                                <li><Link to="/">Home</Link></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-section tf-create-and-sell">
                <div className="tf-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="tf-create wow fadeInUp" data-wow-delay="0.2s">
                                {/* <h2 className="heading">About UBSEC 🎓</h2> */}
                                <img src={Full_Logo} alt="About UBSEC" style={{ maxWidth: '50%', height: 'auto', margin: '1%' }} />
                                <p>Welcome to the University at Buffalo Student Excellence in Cybersecurity (UBSEC) club. We are a dynamic community of students passionate about exploring and advancing in the field of cybersecurity 🔐.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-about-us">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="tf-heading style-3">
                                <h2 className="heading">About UBSEC 🎓</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-section tf-create-and-sell">
                <div className="tf-container">
                    <div className="row">
                        {aboutData.map(item => (
                            <div className="col-lg-4 col-md-6" key={item.id}>
                                <div className="tf-create wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="icon">
                                        <img src={item.img} alt={item.heading} style={{ maxWidth: '100%', height: 'auto' }} />
                                    </div>
                                    <h4>{item.heading}</h4>
                                    <ul>
                                        {item.text.map((point, index) => (
                                            <li key={index}>● {point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
