import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Kayıt işlemleri burada gerçekleştirilebilir
  };

  return (
    <div>
      <h1>Kayıt Ol</h1>
      <form>
        <label>Kullanıcı Adı:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Şifre:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleRegister}>Kayıt Ol</button>
      </form>
    </div>
  );
}

export default Register;
