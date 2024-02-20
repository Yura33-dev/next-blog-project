import Notification from "@/ui/notification/notification";
import MainNavigation from "./main-navigation";
import { useContext } from "react";
import NotificationContext from "@/store/context/notification";

function Layout({ children }) {
  const { notification } = useContext(NotificationContext);

  return (
    <>
      <MainNavigation />
      <main>{children}</main>

      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
}

export default Layout;
