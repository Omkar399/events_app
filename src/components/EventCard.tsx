import { Event } from '../data/events';

interface EventCardProps {
  event: Event;
  onRegister: (event: Event) => void;
}

function EventCard({ event, onRegister }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className='event-card'>
      <div className='event-image'>
        <img src={event.image} alt={event.title} />
        <div className='event-category'>{event.category}</div>
      </div>
      <div className='event-info'>
        <h3 className='event-title'>{event.title}</h3>
        <p className='event-description'>{event.description}</p>
        <div className='event-details'>
          <div className='event-detail'>
            <span className='label'>📅 Date:</span>
            <span className='value'>{formatDate(event.date)}</span>
          </div>
          <div className='event-detail'>
            <span className='label'>📍 Location:</span>
            <span className='value'>{event.location}</span>
          </div>
          <div className='event-detail'>
            <span className='label'>👥 Capacity:</span>
            <span className='value'>{event.capacity} people</span>
          </div>
          <div className='event-detail'>
            <span className='label'>🏢 Organizer:</span>
            <span className='value'>{event.organizer}</span>
          </div>
        </div>
        <div className='event-footer'>
          <span className='event-price'>${event.price}</span>
          <button className='register-btn' onClick={() => onRegister(event)}>
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;

