import React, { createContext, useState } from 'react';
import { type Event, type EventContextType } from '../types';

export const EventContext = createContext<EventContextType | undefined>(undefined);

const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const createEvent = (event: Event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  const fetchEvents = () => {
    // setEvents((prevEvents) => prevEvents.filter(event => event.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, createEvent, fetchEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
