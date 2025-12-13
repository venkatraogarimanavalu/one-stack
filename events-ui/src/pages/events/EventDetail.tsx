import React from 'react';
import { useParams } from 'react-router-dom';
import { useEvent } from '../../hooks/useEvent';

const EventDetail = () => {
  const { id } = useParams();
  const { event, loading, error } = useEvent(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading event details.</div>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
    </div>
  );
};

export default EventDetail;