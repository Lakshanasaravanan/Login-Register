import React, { useState } from 'react';

function Login({ users, switchView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      alert(`Welcome ${username}!`);
      setUsername('');
      setPassword('');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ width:'300px', padding:'20px', border:'1px solid #ccc', borderRadius:'8px' }}>
      <h2>Login</h2>
      <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} style={{width:'100%', padding:'8px', margin:'8px 0'}} />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%', padding:'8px', margin:'8px 0'}} />
      <button onClick={handleLogin} style={{width:'100%', padding:'10px', background:'#27ae60', color:'#fff', border:'none', borderRadius:'5px'}}>Login</button>
      <p style={{marginTop:'10px'}}>Don't have an account? <span style={{color:'blue', cursor:'pointer'}} onClick={switchView}>Register</span></p>
    </div>
  );
}

export default Login;
