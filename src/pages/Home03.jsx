import React from 'react';
import Banner03 from '../components/banner/Banner03';
import dataBanner2 from '../assets/data/data-banner-2';
import Create2 from '../components/create/Create2';

Home03.propTypes = {
    
};

function Home03(props) {
    return (
        <div className='home-3'>

            <div id="page">
                <Banner03 data={dataBanner2} />

                <Create2 />
            </div>
            
        </div>
    );
}

export default Home03;