import { io } from "socket.io-client";

export const usersNamespace = () => {
  return io('ws://localhost/users');
}
