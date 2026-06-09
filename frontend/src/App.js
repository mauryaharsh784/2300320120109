import React, { useState } from 'react';

function App() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendLog = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stack: 'frontend',
          level: 'info',
          package: 'axios',
          message: message || 'Test log from frontend'
        })
      });
      const data = await res.json();
      setLogs(prev => [...prev, {
        message: message || 'Test log from frontend',
        status: 'success',
        time: new Date().toLocaleTimeString()
      }]);
      setMessage('');
    } catch (err) {
      setLogs(prev => [...prev, {
        message: 'Error: ' + err.message,
        status: 'error',
        time: new Date().toLocaleTimeString()
      }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ background: '#1976d2', color: 'white', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
        <h1 style={{ margin: 0 }}>AffordMed Logging System</h1>
      </div>

      <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
        <h2>Send Log</h2>
        <input
          type="text"
          placeholder="Enter log message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
        />
        <button
          onClick={sendLog}
          disabled={loading}
          style={{ background: '#1976d2', color: 'white', padding: '10px 24px', fontSize: '16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {loading ? 'Sending...' : 'Send Log'}
        </button>
      </div>

      <h3>Log History:</h3>
      {logs.map((log, i) => (
        <div key={i} style={{
          padding: '12px',
          marginBottom: '8px',
          borderRadius: '4px',
          background: log.status === 'success' ? '#e8f5e9' : '#ffebee',
          borderLeft: `4px solid ${log.status === 'success' ? '#4caf50' : '#f44336'}`
        }}>
          [{log.time}] {log.message}
        </div>
      ))}
    </div>
  );
}

export default App;