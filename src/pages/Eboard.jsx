import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import HotPick from '../components/hotpick/HotPick';
import eboard from '../assets/data/eboard';

Eboard.propTypes = {
    
};

function Eboard(props) {
    return (
        <div className='page-explore'>
            <PageTitle none='none' title='Eboard' />

            <HotPick data={eboard} />
            
        </div>
    );
}

export default Eboard;