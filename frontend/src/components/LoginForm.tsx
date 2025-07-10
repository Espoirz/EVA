import React, { useState } from 'react';
import { login } from '../api/authApi';

export default function LoginForm() {
  const [u, sU] = useState(''), [p, sP] = useState('');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await login(u, p);
    localStorage.setItem('token', token);
    window.location.href = '/dashboard';
  };
  return (
    <form onSubmit={submit} className="p-4">
      <input placeholder="Username" onChange={e=>sU(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e=>sP(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
