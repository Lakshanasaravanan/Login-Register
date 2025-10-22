import React, { useState } from 'react';

function Register({ users, setUsers, switchView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!username || !password) return alert('Fill all fields');
    if (users.find(u => u.username === username)) return alert('Username already exists');

    setUsers([...users, { username, password }]);
    alert('Registration successful!');
    setUsername('');
    setPassword('');
    switchView(); // Go to login
  };

  return (
    <div style={{ width:'300px', padding:'20px', border:'1px solid #ccc', borderRadius:'8px' }}>
      <h2>Register</h2>
      <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} style={{width:'100%', padding:'8px', margin:'8px 0'}} />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%', padding:'8px', margin:'8px 0'}} />
      <button onClick={handleRegister} style={{width:'100%', padding:'10px', background:'#27ae60', color:'#fff', border:'none', borderRadius:'5px'}}>Register</button>
      <p style={{marginTop:'10px'}}>Already have an account? <span style={{color:'blue', cursor:'pointer'}} onClick={switchView}>Login</span></p>
    </div>
  );
}

export default Register;
