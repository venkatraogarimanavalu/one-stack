import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/events/')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(e => (
          <li key={e.id}>
            <h3>{e.title}</h3>
            <p>{e.description}</p>
            <p>Date: {e.date} Time: {e.time}</p>
            <p>Status: {e.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
