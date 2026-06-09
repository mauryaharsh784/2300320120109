import React, { useState, useEffect } from 'react';
import NotificationList from './components/NotificationList';
import './App.css';

function App() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await fetch('http://localhost:5000/notifications');
      const data = await response.json();
      setNotifications(data.notifications || []);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app">
      <h1>Campus Notifications</h1>
      <NotificationList notifications={notifications} />
    </div>
  );
}

export default App;