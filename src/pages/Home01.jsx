import React from 'react';
import dataBanner from '../assets/data/data-banner';
import dataCreate from '../assets/data/data-create';
import dataExplore from '../assets/data/data-explore';
import Banner01 from '../components/banner/Banner01';
import Create from '../components/create/Create';
import Explore from '../components/explore/Explore';


function Home01(props) {

    return (
        <div className="home-1">
            <div id='page'>
                <Banner01 data={dataBanner} />

                <Create data={dataCreate} />

                <Explore data={dataExplore} />
            </div>
        </div>

    );
}

export default Home01;