import React from 'react';
import NotificationCard from './NotificationCard';
import './NotificationList.css';

function NotificationList({ notifications }) {
  if (!notifications || notifications.length === 0) {
    return <div className="empty">No notifications found!</div>;
  }

  return (
    <div className="notification-list">
      {notifications.map((notification) => (
        <NotificationCard key={notification.ID} notification={notification} />
      ))}
    </div>
  );
}

export default NotificationList;