import io from 'socket.io-client';

export interface SocketMessage<T = any> {
  type: string;
  from: string;
  data: T;
}
export interface EventData<D> extends SocketMessage {
  type: string;
  from: string;
  data: {
    symbol: string;
  } & D;
}
export const socket = io(
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3003'
    : window.location.origin,
  {
    transports: ['websocket'],
  },
);
socket.open();
