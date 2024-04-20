import Header from "./Header";
import Notification from "../notification/Notification";
import { useNotification } from "../../context/NotificationContext";

function Layout({ children }) {
  const { notification } = useNotification();
  return (
    <>
      <Header />
      <main>{children}</main>
      {notification && <Notification title={notification.title} message={notification.message} status={notification.status} />}
    </>
  );
}

export default Layout;
