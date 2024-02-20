import ReactDOM from 'react-dom';
import { useContext, useEffect } from 'react';

import classes from './notification.module.css';

import NotificationContext from '@/store/context/notification';

function Notification(props) {
  const { title, message, status } = props;

  const { hideNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        hideNotification();
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [status, hideNotification]);

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses} onClick={hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notification')
  );
}

export default Notification;
