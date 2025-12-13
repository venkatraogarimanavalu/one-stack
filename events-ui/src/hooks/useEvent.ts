import { useContext } from 'react';
import { type EventContextType } from '../types';
import { EventContext } from '../contexts/EventContext';

// const useEvent = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadEvents = async () => {
//       try {
//         const data = await fetchEvents();
//         setEvents(data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadEvents();
//   }, []);

//   const addEvent = async (eventData) => {
//     try {
//       const newEvent = await createEvent(eventData);
//       setEvents((prevEvents) => [...prevEvents, newEvent]);
//     } catch (err) {
//       setError(err);
//     }
//   };

//   const editEvent = async (id, updatedData) => {
//     try {
//       const updatedEvent = await updateEvent(id, updatedData);
//       setEvents((prevEvents) =>
//         prevEvents.map((event) => (event.id === id ? updatedEvent : event))
//       );
//     } catch (err) {
//       setError(err);
//     }
//   };

//   const removeEvent = async (id) => {
//     try {
//       await deleteEvent(id);
//       setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
//     } catch (err) {
//       setError(err);
//     }
//   };

//   return { events, loading, error, addEvent, editEvent, removeEvent };
// };

// export default useEvent;


export const useEvent = (): EventContextType => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvent must be used within an EventProvider');
  }
  return context;
};