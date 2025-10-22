import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [users, setUsers] = useState([]);
  const [currentView, setCurrentView] = useState('login'); // 'login' or 'register'

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f4f7fa'
    }}>
      {currentView === 'login' ? (
        <Login
          users={users}
          switchView={() => setCurrentView('register')}
        />
      ) : (
        <Register
          users={users}
          setUsers={setUsers}
          switchView={() => setCurrentView('login')}
        />
      )}
    </div>
  );
}

export default App;
