import React from 'react';
import dataBanner from '../assets/data/data-banner';
import Banner02 from '../components/banner/Banner02';
import Create5 from '../components/create/Create5';


function Home02(props) {

    return (
        <div className='home-2'>
            <div id="page">
                <Banner02 data={dataBanner} />
                <Create5 />
            </div>
            
        </div>
    );
}

export default Home02;