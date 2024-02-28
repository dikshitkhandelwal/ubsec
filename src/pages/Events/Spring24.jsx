import React from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import eboard from '../../assets/data/eboard';
import EventStructure from '../../components/hotpick/EventsStructure';

Spring24.propTypes = {
    
};

function Spring24(props) {
    return (
        <div className='page-explore'>
            <PageTitle sub='Events' title='Spring24' />

            <EventStructure data={eboard} />
            
        </div>
    );
}

export default Spring24;