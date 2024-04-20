import classes from "./notification.module.css";
import { useNotification } from "../../context/NotificationContext";

function Notification({ title, message, status }) {
  const { hideNotification } = useNotification();
  let statusClasses = {
    success: "#10be58",
    error: "#e65035",
  };

  return (
    <div onClick={hideNotification} className={classes.notification} style={{ backgroundColor: `${statusClasses[status]}` }}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
