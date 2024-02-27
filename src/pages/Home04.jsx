import React from 'react';
import Banner04 from '../components/banner/Banner04';
import dataBanner from '../assets/fake-data/data-banner';
import Create4 from '../components/create/Create4';

Home04.propTypes = {
    
};

function Home04(props) {
    return (
        <div className='home-4'>
            <div id="page">
                <Banner04 data={dataBanner} />

                <Create4 />

            </div>
        </div>
    );
}

export default Home04;