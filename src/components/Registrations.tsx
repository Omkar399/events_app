import { Event } from '../data/events';

interface RegistrationsProps {
  registrations: Event[];
  onCancelRegistration: (eventId: number) => void;
  onClearAll: () => void;
}

function Registrations({ registrations, onCancelRegistration, onClearAll }: RegistrationsProps) {
  const total = registrations.reduce((sum, event) => sum + event.price, 0);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  if (registrations.length === 0) {
    return (
      <div className='registrations'>
        <h2 className='registrations-header'>My Registrations</h2>
        <p className='empty-registrations'>No events registered yet. Start exploring!</p>
      </div>
    );
  }

  return (
    <div className='registrations'>
      <div className='registrations-header-row'>
        <h2>My Registrations</h2>
        <button className='clear-all-btn' onClick={onClearAll}>
          Clear All
        </button>
      </div>

      <div className='registration-items'>
        {registrations.map((event) => (
          <div key={event.id} className='registration-item'>
            <div className='registration-image'>
              <img src={event.image} alt={event.title} />
            </div>
            <div className='registration-details'>
              <h4>{event.title}</h4>
              <p>📅 {formatDate(event.date)}</p>
              <p>📍 {event.location}</p>
              <p className='registration-price'>${event.price}</p>
            </div>
            <button
              className='cancel-btn'
              onClick={() => onCancelRegistration(event.id)}
            >
              Cancel
            </button>
          </div>
        ))}
      </div>

      <div className='registrations-footer'>
        <div className='total-price'>
          <span className='label'>Total:</span>
          <span className='amount'>${total.toFixed(2)}</span>
        </div>
        <button className='checkout-btn'>Proceed to Payment</button>
      </div>
    </div>
  );
}

export default Registrations;

