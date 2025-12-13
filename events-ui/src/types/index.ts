// src/types/index.ts
export interface User {
  id: string;
  username: string;
  email: string;
  token: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (username?: string, password?: string) => void;
  logout: () => void;
  register: (username?: string, email?: string, password?: string) => void;
}

export interface EventContextType {
  events: Event[];
  fetchEvents: () => void;
  createEvent: (event: Event) => void;
}

export type ThemeType = "light" | "dark" | "ocean" | "forest" | "system";

export interface ThemeContextType {
   theme: ThemeType; 
   setCurrentTheme: (theme: ThemeType) => void ;
}