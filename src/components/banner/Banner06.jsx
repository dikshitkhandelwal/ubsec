import React from 'react';

import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Link } from 'react-router-dom';

Banner06.propTypes = {
    
};

function Banner06(props) {
    const {data} = props;
    return (
        <section className="tf-slider">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                        <img src="assets/images/slider/bg-slider-2.png" alt="UBSEC" className="img-slider-1" />  
                        <Swiper
                            modules={[Navigation,  Scrollbar, A11y ]}
                            spaceBetween={0}
                            slidesPerView={1}
                            className="slider-home"
                  
                        >
                        {
                            data.map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="tf-slider-item style-6">
                                                <div className="content-inner">
                                                    <h1 className="heading">
                                                        Securing Futures, Empowering Minds <span>UBSEC</span>  
                                                    </h1>
                                                    <p className="sub-heading">UBSEC, the cybersecurity club at the University of Buffalo, is a vibrant community of tech enthusiasts dedicated to mastering the art and science of digital defense.</p>
                                                    <div className="btn-slider ">
                                                        <Link to="/events/spring-2024" className="tf-button style-2">Spring 24 Events</Link>
                                                        <Link to="/about-us" className="tf-button style-9">About UBSEC</Link>
                                                    </div>
                                                </div>
                                                {/* <div className="image ani4">
                                                    <div className="sc-product style1 ">
                                                        <div className="top">
                                                            <Link to="/item-details-v1" className="tag">Giulia Glur #32</Link>
                                                            <div className="wish-list">
                                                                <Link to="#" className="heart-icon"></Link>
                                                            </div>
                                                        </div>
                                                        <div className="features">
                                                            <div className="product-media">
                                                                <img src={img} alt="images" />
                                                            </div>
                                                            <div className="featured-countdown">
                                                                <span className="js-countdown" data-timer="55555" data-labels=" ,  h , m , s "></span>
                                                            </div>
                                                            <div className="rain-drop1"><img src={icon1} alt="images" /></div>
                                                            <div className="rain-drop2"><img src={icon2} alt="images" /></div>
                                                        </div>
                                                        <div className="bottom">
                                                            <div className="product-button">
                                                                <Link to="#" data-toggle="modal" data-target="#popup_bid" className="tf-button"> <span className="icon-btn-product"></span> Place Bid</Link>
                                                            </div>
                        
                                                        </div>
                                                    </div>
                                                    <div className="sc-product style1 ">
                                                        <div className="features">
                                                            <div className="product-media">
                                                                <img src={img2} alt="images" />
                                                            </div>
                                                            <div className="featured-countdown">
                                                                <span className="js-countdown" data-timer="55555" data-labels=" ,  h , m , s "></span>
                                                            </div>
                                                            <div className="rain-drop1"><img src={icon1} alt="images" /></div>
                                                            <div className="rain-drop2"><img src={icon2} alt="images" /></div>
                                                        </div>
                                                        <div className="bottom">
                                                            <div className="details-product">
                                                                <div className="author">
                                                                    <div className="avatar">
                                                                        <img src={avt} alt="images" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <div className="position">Creator</div>
                                                                        <div className="name"> <Link to="#">Magnus Perry</Link></div>
                                                                    </div>
                                                                </div>
                                                                <div className="bid">
                                                                    <div className="subtitle">Current bid</div>
                                                                    <div className="price">
                                                                        <span className="cash">5 ETH</span><span className="icon"><img src={icon3} alt="images" /></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-button">
                                                                <Link to="#" data-toggle="modal" data-target="#popup_bid" className="tf-button"> <span className="icon-btn-product"></span> Place Bid</Link>
                                                            </div>
                        
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>

                            
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Banner06;