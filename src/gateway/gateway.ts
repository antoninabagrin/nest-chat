import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: true,
})
export class MyGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('Connected');

      socket.on('my message', (msg) => {
        console.log('message: ' + msg);
      });
    });

    this.server.on('connection', (socket) => {
      socket.on('my message', (msg) => {
        this.server.emit('my broadcast', `server: ${msg}`);
      });
    });

    this.server.on('disconnect', () => {
      console.log('Disconnected');
    });
  }
}
