import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import HotPick from '../components/hotpick/HotPick';
import dataHotpick from '../assets/fake-data/data-hotpick';

Eboard.propTypes = {
    
};

function Eboard(props) {
    return (
        <div className='page-explore'>
            <PageTitle none='none' title='Eboard' />

            <HotPick data={dataHotpick} />
            
        </div>
    );
}

export default Eboard;