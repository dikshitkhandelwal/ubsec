import React , {useState} from 'react';

import {  Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import img1 from '../../assets/images/slider/slider-8.png'
import img2 from '../../assets/images/slider/slider-9.png'
import img3 from '../../assets/images/slider/slider-10.png'
import img4 from '../../assets/images/slider/slider-11.png'
import { Link } from 'react-router-dom';
import CardModal from '../layouts/CardModal';

Banner05.propTypes = {
    
};

function Banner05(props) {
    const {data} = props;

    const [modalShow, setModalShow] = useState(false);
    return (
        <section className="tf-slider">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                        <Swiper
                            modules={[  Scrollbar, A11y ]}
                            spaceBetween={0}
                            slidesPerView={1}
                            className="slider-home"
                        >
                        {
                            data.map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div class="slider-item">
                                        <div class="tf-slider-item style-5">
                                            <div class="content-inner">
                                                <img src={img1} alt="UBSEC" class="img-star star-1 ani4" />
                                                <img src={img2} alt="UBSEC" class="img-star star-2 ani5" />
                                                <img src={img3} alt="UBSEC" class="img-star star-3 ani4" />
                                                <img src={img4} alt="UBSEC" class="img-star star-4 ani5" />
                                                <h2 class="heading">
                                                    Securing Futures, Empowering Minds  
                                                </h2>
                                                <p class="sub-heading">{idx.desc}</p>
                                                <div class="btn-slider ">
                                                    <a href="https://forms.office.com/r/DGSySv3z5h" className="tf-button">HackFest Registration</a>
                                                    <Link to="/about-us" class="tf-button style-2">About UBSEC</Link>
                                                </div>
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
                <CardModal 
                show={modalShow}
                onHide={() => setModalShow(false)} 
            />
            </section>
    );
}

export default Banner05;