

import LiveAuction4 from '../components/liveautions/LiveAuction4';
import dataLiveaution from '../assets/fake-data/data-liveaution';
import PageTitle from '../components/pagetitle/PageTitle';

import img1 from '../assets/images/img-banner-explore.png'
import img2 from '../assets/images/img-banner-live-auction-2.png'

LiveAutions02.propTypes = {
    
};

function LiveAutions02(props) {
    return (
        <div className='page-liveauction'>

            <PageTitle sub='Explore' title='Live Auction' />

            <section className="tf-baner-live-auction">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-liver-auction-wrap">
                                <div className="content">
                                    <div className="heading">
                                        <h2 className="title">Big Boss #1238</h2>
                                        <span className="label">Coming soon</span>
                                    </div>
                                    <div className="price">
                                        <span className="icon"><i className="fab fa-ethereum"></i></span>
                                        <span>5 ETH</span>
                                    </div>
                                    <p className="sub-heading">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                                <div className="image">
                                    <img src={img1} alt="Binasea" className="img1" />
                                    <img src={img2} alt="Binasea" className="img2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LiveAuction4 data={dataLiveaution} />
            
        </div>
    );
}

export default LiveAutions02;