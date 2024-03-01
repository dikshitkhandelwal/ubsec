import React from 'react';

import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Link } from 'react-router-dom';

Banner04.propTypes = {
    
};

function Banner04(props) {
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
                            className="slider-home"
                            loop= {true}
                        >
                        {
                            data.slice(2,4).map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="tf-slider-item style-4">
                                                <div className="content-inner">
                                                    <h1 className="heading">
                                                        {idx.heading}
                                                    </h1>
                                                    <p className="sub-heading">{idx.desc}</p>
                                                    <div className="btn-slider ">
                                                        <Link to="/events/spring-2024" className="tf-button style-2">Spring 24 Events</Link>
                                                        <Link to="/about-us" className="tf-button style-3">About UBSEC</Link>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <div className="ani4"><img src={idx.img} alt="UBSEC" /></div>
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

export default Banner04;