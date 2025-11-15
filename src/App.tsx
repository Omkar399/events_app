import { useState } from 'react';
import { events, type Event } from './data/events';
import EventList from './components/EventList';
import Registrations from './components/Registrations';
import './App.css';

function App() {
  const [registrations, setRegistrations] = useState<Event[]>([]);
  const [showRegistrations, setShowRegistrations] = useState(false);

  const handleRegister = (event: Event) => {
    // Check if already registered
    const alreadyRegistered = registrations.find((e) => e.id === event.id);
    if (alreadyRegistered) {
      alert('You are already registered for this event!');
      return;
    }

    setRegistrations((prev) => [...prev, event]);
    alert(`Successfully registered for ${event.title}!`);
  };

  const handleCancelRegistration = (eventId: number) => {
    setRegistrations((prev) => prev.filter((event) => event.id !== eventId));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to cancel all registrations?')) {
      setRegistrations([]);
    }
  };

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>🎉 EventHub</h1>
        <button
          className='registrations-toggle'
          onClick={() => setShowRegistrations(!showRegistrations)}
        >
          My Events ({registrations.length})
        </button>
      </header>

      <main className='app-main'>
        {showRegistrations ? (
          <Registrations
            registrations={registrations}
            onCancelRegistration={handleCancelRegistration}
            onClearAll={handleClearAll}
          />
        ) : (
          <>
            <div className='hero-section'>
              <h2>Discover Amazing Events</h2>
              <p>Find and register for events happening near you</p>
            </div>
            <EventList events={events} onRegister={handleRegister} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
