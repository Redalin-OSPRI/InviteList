import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import KanbanBoard from '../components/KanbanBoard';
import { useEventContext } from '../context/EventContext';

const EventPage: React.FC = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const { events } = useEventContext();
    const event = events.find(event => event.id === eventId);

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div>
            <Banner imageUrl={event.bannerImage} />
            <h1>{event.title}</h1>
            <KanbanBoard eventId={eventId} />
        </div>
    );
};

export default EventPage;