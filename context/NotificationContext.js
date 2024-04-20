import { createContext, useContext, useEffect, useState } from "react";

const NotificationContext = createContext();
function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null); // title, message, status

  useEffect(() => {
    if (!notification) return;
    const timeId = setTimeout(() => {
      hideNotification();
    }, 3000);

    return () => clearTimeout(timeId);
  }, [notification]);
  function showNotification(data) {
    setNotification({ title: data.title, message: data.message, status: data.status });
  }
  function hideNotification() {
    setNotification(null);
  }

  const value = {
    notification,
    showNotification,
    hideNotification,
  };
  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
}

export function useNotification() {
  const value = useContext(NotificationContext);
  if (value === undefined) throw new Error("Notification context was used out side Notification Provider");

  return value;
}

export default NotificationProvider;
