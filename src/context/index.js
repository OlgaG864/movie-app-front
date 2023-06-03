import React from "react";
import AuthProvider from "./AuthProvider";
import NotificationProvider from "./NotificationProvider";
import Theme from "./Theme";

export default function ContextProviders({ children }) {
  return (
    <NotificationProvider>
      <AuthProvider>
        <Theme>{children}</Theme>
      </AuthProvider>
    </NotificationProvider>
  );
}
