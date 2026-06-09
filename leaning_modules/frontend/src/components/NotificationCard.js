import React, { useState } from 'react';
import './NotificationCard.css';

function NotificationCard({ notification }) {
  const [viewed, setViewed] = useState(false);

  const getTypeColor = (type) => {
    if (type === 'Placement') return '#1a73e8';
    if (type === 'Result') return '#34a853';
    if (type === 'Event') return '#fbbc04';
    return '#666';
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div
      className={`notification-card ${viewed ? 'viewed' : 'new'}`}
      onClick={() => setViewed(true)}
    >
      <div className="card-header">
        <span
          className="type-badge"
          style={{ backgroundColor: getTypeColor(notification.Type) }}
        >
          {notification.Type}
        </span>
        {!viewed && <span className="new-badge">NEW</span>}
      </div>
      <p className="message">{notification.Message}</p>
      <p className="timestamp">{formatTime(notification.Timestamp)}</p>
    </div>
  );
}

export default NotificationCard;