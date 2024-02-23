import React , {useState} from 'react';

import icon1 from '../assets/images/svg/icon-wallet-1.svg'
import icon2 from '../assets/images/svg/icon-wallet-2.svg'
import icon3 from '../assets/images/svg/icon-wallet-3.svg'
import icon4 from '../assets/images/svg/icon-wallet-4.svg'
import icon5 from '../assets/images/svg/icon-wallet-5.svg'
import { Link } from 'react-router-dom';

Wallet.propTypes = {
    
};

function Wallet(props) {
    const [dataWallet] = useState([
        {
            id: 1,
            img: icon1,
            cate: '',
            title: 'Dikshit Khandelwal',
            text : 'President',
            text2 : 'Major: Computer Science',
            linkedInUrl: 'https://www.linkedin.com/in/dikshitkhandelwal/'
        },
        {
            id: 2,
            img: icon2,
            cate: 'none',
            title: 'Austin Chen',
            text : 'Vice President',
            text2 : 'Major: ITM'
        },
        {
            id: 3,
            img: icon3,
            cate: '',
            title: 'Jonathan Pestinger',
            text : 'Secretary',
            text2 : 'Major: ITM'
        },
        {
            id: 4,
            img: icon4,
            cate: 'none',
            title: 'Steffi',
            text : 'Treasurer',
            text2 : 'Major: ITM'
        },
        {
            id: 5,
            img: icon5,
            cate: '',
            title: 'Lauren Moore',
            text : 'Event Coordinator',
            text2 : 'Major: ITM'
        },
    ])
    return (
        <div>

            <section className="tf-page-title">    
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">

                            <ul className="breadcrumbs">
                                <li><Link to="#">Pages</Link></li>
                                <li>Eboard</li>
                            </ul>
                   
                        </div>
                    </div>
                </div>                    
            </section>
                
            <section className="tf-connect-wallet">
                <div className="tf-container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="tf-heading style-5">
                                <h4 className="heading">Meet Eboard</h4>
                            </div>
                        </div>
                        {
                            dataWallet.map(idx => (
                                <div key={idx.id} className="col-lg-4 col-md-6">
                                    <div className="tf-wallet">
                                        <div className="icon">
                                            <img src={idx.img} alt="Binasea" />
                                        </div>
                                        <h6 className="title"><Link to="https://www.dikshitkhandelwal.com">{idx.title}</Link></h6>
                                        <p className="content">{idx.text}</p>
                                        <p className="content">{idx.text2}</p>

                                        <div className="widget widget-infor">
                                            <ul className="social-item">
                                                <li><Link to="#"><i className="fab fa-linkedin"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Wallet;