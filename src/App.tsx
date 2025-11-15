import { useState, useEffect } from 'react';
import { events, type Event } from './data/events';
import EventList from './components/EventList';
import Registrations from './components/Registrations';
import './App.css';

function App() {
  // Load registrations from localStorage on mount
  const [registrations, setRegistrations] = useState<Event[]>(() => {
    const saved = localStorage.getItem('eventRegistrations');
    return saved ? JSON.parse(saved) : [];
  });
  const [showRegistrations, setShowRegistrations] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Save registrations to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('eventRegistrations', JSON.stringify(registrations));
  }, [registrations]);

  // Auto-hide notification after 3 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleRegister = (event: Event) => {
    // Check if already registered
    const alreadyRegistered = registrations.find((e) => e.id === event.id);
    if (alreadyRegistered) {
      setNotification(`⚠️ Already registered for ${event.title}`);
      return;
    }

    setRegistrations((prev) => [...prev, event]);
    setNotification(`✅ Registered for ${event.title}!`);
  };

  const handleCancelRegistration = (eventId: number) => {
    const event = registrations.find((e) => e.id === eventId);
    setRegistrations((prev) => prev.filter((e) => e.id !== eventId));
    if (event) {
      setNotification(`❌ Cancelled ${event.title}`);
    }
  };

  const handleClearAll = () => {
    setRegistrations([]);
    setNotification('🗑️ All registrations cleared');
  };

  return (
    <div className='app'>
      {notification && (
        <div className='notification'>
          {notification}
        </div>
      )}
      
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
