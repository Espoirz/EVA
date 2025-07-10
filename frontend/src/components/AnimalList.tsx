import React, { useEffect, useState } from 'react';
import { fetchAnimals } from '../api/animalApi';

export default function AnimalList() {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => { fetchAnimals().then(setList); }, []);
  return (
    <ul>
      {list.map(a =>
        <li key={a.id}>{a.name} ({a.breed}) - {a.stage}</li>
      )}
    </ul>
  );
}
