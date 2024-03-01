import React from 'react';
import Banner05 from '../components/banner/Banner05';
import dataBanner from '../assets/data/data-banner';
import Create5 from '../components/create/Create5';

Home05.propTypes = {
    
};

function Home05(props) {
    return (
        <div className="home-5">
            <div id='page'>
                <Banner05 data={dataBanner} />
                <Create5 />
            </div>
        </div>
    );
}

export default Home05;