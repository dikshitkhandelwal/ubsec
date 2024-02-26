import React from 'react';
import ComingSoonBanner from '../components/banner/ComingSoonBanner';
import dataBanner from '../assets/fake-data/comingsoon-data-banner';

ComingSoon.propTypes = {
    
};

function ComingSoon(props) {
    return (
        <div className="home-5">
            <div id='page'>
                <ComingSoonBanner data={dataBanner} />
            </div>
        </div>
    );
}

export default ComingSoon;