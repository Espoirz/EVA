import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import socket from '../realtime/socket';

export default function ClubPage() {
  const { id } = useParams<{id:string}>();
  const [msgs, setMsgs] = useState<string[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.emit('joinClub', id);
    socket.on('message', (m: string) => setMsgs(prev => [...prev, m]));
  }, [id]);

  const send = () => {
    socket.emit('message', { clubId: id, text: input });
    setInput('');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl">Club Chat</h1>
      <div className="border p-2 h-64 overflow-auto">
        {msgs.map((m,i)=> <div key={i}>{m}</div>)}
      </div>
      <input
        value={input}
        onChange={e=>setInput(e.target.value)}
        className="border mr-2"
      />
      <button onClick={send} className="bg-blue-500 text-white px-2">Send</button>
    </div>
  );
}
