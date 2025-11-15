import EventCard from './EventCard';
import type { Event } from '../data/events';

interface EventListProps {
  events: Event[];
  onRegister: (event: Event) => void;
}

function EventList({ events, onRegister }: EventListProps) {
  return (
    <div className='event-list'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} onRegister={onRegister} />
      ))}
    </div>
  );
}

export default EventList;

