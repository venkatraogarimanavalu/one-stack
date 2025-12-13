import { ReactNode } from "react";
import AuthProvider from "./AuthContext";
import EventProvider from "./EventContext";
import ThemeProvider from "./ThemeContext";


interface Props {
  children: ReactNode;
}

const AppProviders = ({ children }: Props) => {
  return (
    <AuthProvider>
      <EventProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </EventProvider>
    </AuthProvider>
  );
};

export default AppProviders;
