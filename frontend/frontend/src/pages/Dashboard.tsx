import React from 'react';
import AnimalList from '../components/AnimalList';

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <AnimalList />
    </div>
  );
}
