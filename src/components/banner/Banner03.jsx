import React , { useState } from 'react';
import PropTypes from 'prop-types';

import { FreeMode, Thumbs, EffectCoverflow , Autoplay   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import shape1 from '../../assets/images/slider/slider-12.png'
import shape2 from '../../assets/images/slider/slider-13.png'
import shape3 from '../../assets/images/slider/slider-14.png'
import shape4 from '../../assets/images/slider/slider-15.png'
import { Link } from 'react-router-dom';



Banner03.propTypes = {
    data : PropTypes.array,
};

function Banner03(props) {
    const {data} = props;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    return (
        <section className="tf-slider">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="swiper-container slider-home-3">
                            <Swiper
                            style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                            }}
                            loop={true}
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            spaceBetween={0}
                            slidesPerView={3}
                            // autoplay={{
                            //     delay: 2500,
                            //     disableOnInteraction: true,
                            //   }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 15,
                                depth: 320,
                                modifier: 1,
                                slideShadows: false,
                              }}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[Autoplay, FreeMode, Thumbs , EffectCoverflow]}
                            className=" mySwiper2 slider-thump"
                        >

                            {
                                data.map(idx =>(
                                    <SwiperSlide key={idx.id}>
                                        <img src={idx.img} alt="Binasea"/>
                                    </SwiperSlide>
                                ))
                            }
                   
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={0}
                            slidesPerView={1}
                            freeMode={true}
                            watchSlidesProgress={true}
                            
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper"
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                              }}
                        >
                            {
                                data.map(idx =>(
                                    <SwiperSlide key={idx.id}>
                                        <div className="tf-slider-item style-3">
                                            <div className="content-inner">
                                                <img src={shape1} alt="Binasea" className="img-star star-1 ani4" />
                                                <img src={shape2} alt="Binasea" className="img-star star-2 ani5" />
                                                <img src={shape3} alt="Binasea" className="img-star star-3 ani4" />
                                                <img src={shape4} alt="Binasea" className="img-star star-4 ani5" />
                                                <h1 className="heading">
                                                    {idx.heading} 
                                                </h1>
                                                <p className="sub-heading">{idx.desc}</p>
                                                <div className="btn-slider ">
                                                    <Link to="/events/spring-2024" className="tf-button style-6">Spring 24 Events</Link>
                                                    <Link to="/create" className="tf-button style-7">About UBSEC</Link>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                            </div>
                        
                        
    
                            
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Banner03;