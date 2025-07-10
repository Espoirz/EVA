import { Server } from 'socket.io';

export function socketHandler(io: Server) {
  io.on('connection', socket => {
    console.log('Client connected', socket.id);

    socket.on('joinClub', (clubId: string) => {
      socket.join(`club_${clubId}`);
    });

    socket.on('message', ({ clubId, text }) => {
      io.to(`club_${clubId}`).emit('message', text);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected', socket.id);
    });
  });
}
