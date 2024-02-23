import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function Banner04({ data }) {
    // Directly access the third item if data array length is sufficient
    const item = data.length > 2 ? data[1] : null;

    return (
        <section className="tf-slider">
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">
                        {item && (
                            <div className="tf-slider-item style-4">
                                <div className="content-inner">
                                    <h1 className="heading">{item.heading}</h1>
                                    <p className="sub-heading">{item.desc}</p>
                                    <div className="btn-slider">
                                        <Link to="/competitionregistration" className="tf-button style-2">
                                            Register <i className="fas fa-long-arrow-right"></i>
                                        </Link>
                                        <Link to="/hackfest24info" className="tf-button style-2">
                                            More Info <i className="fas fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="image">
                                    <div className="ani4">
                                        <img src={item.img} alt="Binasea" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner04;
