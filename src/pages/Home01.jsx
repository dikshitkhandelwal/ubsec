import React from 'react';
import dataBanner from '../assets/data/data-banner';
import Banner01 from '../components/banner/Banner01';
import Create5 from '../components/create/Create5';


function Home01(props) {

    return (
        <div className="home-1">
            <div id='page'>
                <Banner01 data={dataBanner} />

                <Create5 />

                {/* <Explore data={dataExplore} /> */}
            </div>
        </div>

    );
}

export default Home01;