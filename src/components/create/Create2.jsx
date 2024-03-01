import React from 'react';
import img from '../../assets/images/banner/details4.png'
import shape1 from '../../assets/images/banner/thumb-banner2.png'
import shape2 from '../../assets/images/banner/details3.png'
import shape3 from '../../assets/images/banner/details1.png'
import shape4 from '../../assets/images/banner/details2.png'

Create2.propTypes = {
    
};

function Create2(props) {
    return (
        <section className="tf-section tf-banner-create banner3" >
                <div className="tf-container">
                    <div className="row vertical-middle">
                        <div className="col-md-6">
                            <div className="content-banner ">
                            <h2 className="wow fadeInUp">Starts Here: Learn,
                                Engage, <span>Secure</span> </h2>
                                <p className="wow fadeInUp">Explore UBSEC: Where Cybersecurity Innovation Thrives and Digital Fortresses Are Fortified</p>
                                <div className="group-btn wow fadeInUp">
                                    <a href="https://discord.gg/THcrbZBPAJ" className="tf-button style-2 btn-1" >Join Discord</a>
                                    <a href="https://buffalo.campuslabs.com/engage/organization/ubsec" className="tf-button style-3 btn-2">UBLinked</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-right">
                                <div className="thumb">
                                    <img className="ani4" src={shape1} alt="images" />
                                    <img className="details-thumb" src={shape2} alt="images" />
                                    <img className="details-thumb2 ani4" src={shape3} alt="images" />
                                    <img className="details-thumb3 ani5" src={shape4} alt="images" />
                                    <img className="details-thumb4" src={img} alt="images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Create2;