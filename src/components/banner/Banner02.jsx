import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Link } from 'react-router-dom';


import shape1 from '../../assets/images/slider/bg-slider.png'
import shape2 from '../../assets/images/slider/bg-slider-4.png'
import img1 from '../../assets/images/product/product26.jpg'
Banner02.propTypes = {
    data : PropTypes.array,
};

function Banner02(props) {
    const {data} = props;
    
    return (
        <section className="tf-slider">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                        <Swiper
                            modules={[Navigation,  Scrollbar, A11y ]}
                            spaceBetween={0}
                            slidesPerView={1}
                            className="slider-home home1"
                            loop= {true}
                        >
                        {
                            data.map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="tf-slider-item style-2">
                                        <div className="content-inner">
                                            <h1 className="heading">
                                            Securing <span>Futures, </span> Empowering<span>Minds</span>
                                                <img src={shape1} alt="UBSEC" />  
                                            </h1>
                                            <p className="sub-heading">{idx.desc}</p>
                                            <div className="btn-slider ">
                                                <Link to="/events/spring-2024" className="tf-button style-2">Spring 24 Events</Link>
                                                <Link to="/about-us" className="tf-button style-3">About UBSEC</Link>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <div className="sc-product style3 ">
                                                <div className="features">
                                                    <div className="product-media">
                                                        <img src={img1} alt="images" />
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={shape2} alt="UBSEC" className="img-slider-2" />
                                        </div>
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

export default Banner02;