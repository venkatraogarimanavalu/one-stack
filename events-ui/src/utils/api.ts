import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching events: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const fetchEventById = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching event: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const createEvent = async (eventData: Record<string, unknown>) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/events`, eventData);
    return response.data;
  } catch (error) {
    throw new Error(`Error creating event: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

// Add more API utility functions as needed