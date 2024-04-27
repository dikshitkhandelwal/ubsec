import React from 'react';
import Banner06 from '../components/banner/Banner06';
import dataBanner from '../assets/data/data-banner';
import Create5 from '../components/create/Create5';

Home06.propTypes = {
    
};

function Home06(props) {
    return (
        <div className='home-6'>

            <div id="page">
                <Banner06 data={dataBanner} />
                <Create5 />
            </div>
            
        </div>
    );
}
export default Home06;