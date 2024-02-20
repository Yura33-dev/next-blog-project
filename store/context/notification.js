import { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext();

export default NotificationContext;

export function NotificationContextProvider({ children }) {
  const [notification, setNotification] = useState(null);

  function showNotification(dataNotification) {
    setNotification({
      title: dataNotification.title,
      message: dataNotification.message,
      status: dataNotification.status,
    });
  }

  function hideNotification() {
    setNotification(null);
  }

  const context = {
    notification,
    showNotification,
    hideNotification,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}
