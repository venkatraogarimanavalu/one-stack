import React, { useContext } from 'react';
import { EventContext } from '../../contexts/EventContext';
import { Link } from 'react-router-dom';

const EventList = () => {
  const { events, loading, error } = useContext(EventContext);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events: {error.message}</p>;

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;