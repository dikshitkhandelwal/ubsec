import React from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import events_spring_2024 from '../../assets/data/events_spring_2024';
import EventStructure from '../../components/hotpick/EventsStructure';

Spring24.propTypes = {
    
};

function Spring24(props) {
    return (
        <div className='page-explore'>
            <PageTitle sub='Events' title='Spring24' />

            <EventStructure data={events_spring_2024} />
            
        </div>
    );
}

export default Spring24;