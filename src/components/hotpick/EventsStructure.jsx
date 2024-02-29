import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Tabs, TabPanel } from 'react-tabs';
import './style.scss';
import CardModal from '../layouts/CardModal';

import icon1 from '../../assets/images/icon/rain1.svg'
import icon2 from '../../assets/images/icon/rain2.svg'
import { Link } from 'react-router-dom';

EventStructure.propTypes = {
    data : PropTypes.array,
};

function EventStructure(props) {

    const [modalShow, setModalShow] = useState(false);
    const {data} = props;

    const [dataTab] = useState([
        {
            id: 1,
            title: '3D MODEL',
            item: 0,
        },
        {
            id: 2,
            title: 'ANIME/MANGA',
            item: 4,
        },
        {
            id: 3,
            title: 'CYBER PUNK',
            item: 5,
        },
        {
            id: 4,
            title: 'PIXEL ART',
            item: 1,
        },
        {
            id: 5,
            title: 'MUSIC',
            item: 3,
        },
        {
            id: 6,
            title: 'ABSTRACT',
            item: 7,
        },
        {
            id: 7,
            title: '2D ARTS',
            item: 3,
        },

    ]);

    return (
        <section className="tf-section tf-hot-pick tf-filter">
                <div className="tf-container">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="tf-heading mb32 wow fadeInUp">
                                <h4 className="heading">Hot Picks</h4>
                            </div>
                        </div>
                        <div className="col-md-12">

                            
                        <Tabs>


                            {
                                dataTab.map(idx => (
                                    <TabPanel key={idx.id}>
                                        <div className="row tf-filter-container wow fadeInUp">
                                            {
                                                data.slice(idx.item, 12).map(idx => (
                                                    <div key={idx.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d cyber">
                                                        <div className="sc-product style2">
                                                            <div className="top">
                                                                <Link to="#" className="tag">{idx.title}</Link>
                                                            </div>
                                                            <div className="bottom">
                                                                <div className="details-product">
                                                                    <div className="author">
                                                                        <div className="content">
                                                                            <div className="name"> <Link to="#">Date: {idx.date}</Link></div>
                                                                            <div className="name"> <Link to="#">Time: {idx.time}</Link></div>
                                                                            <div className="name"> <Link to="#">Location: {idx.location}</Link></div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="features">
                                                                <div className="product-media">
                                                                    <img src={idx.img} alt="images" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        
                                        </div>
                                    </TabPanel>
                                ))
                            }
                            

                        </Tabs> 
              
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

export default EventStructure;