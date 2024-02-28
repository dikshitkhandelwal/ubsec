import React from 'react';
import dataBanner from '../assets/data/data-banner';
import dataCreate from '../assets/data/data-create';
import Banner02 from '../components/banner/Banner02';
import Create from '../components/create/Create';


function Home02(props) {

    return (
        <div className='home-2'>
            <div id="page">

                <Banner02 data={dataBanner} />

                <Create data={dataCreate} />

            </div>
            
        </div>
    );
}

export default Home02;