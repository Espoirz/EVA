import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { createConnection } from 'typeorm';
import ormconfig from './ormconfig';
import authRoutes from './routes/auth.routes';
import animalRoutes from './routes/animal.routes';
import clubRoutes from './routes/club.routes';
import { socketHandler } from './realtime/socket';

async function main() {
  await createConnection(ormconfig);
  const app = express();
  app.use(cors(), express.json());

  app.use('/api/auth', authRoutes);
  app.use('/api/animals', animalRoutes);
  app.use('/api/clubs', clubRoutes);

  const server = http.createServer(app);
  const io = require('socket.io')(server, { cors: { origin: '*' } });
  socketHandler(io);

  server.listen(4000, () => console.log('Backend on port 4000'));
}

main();
