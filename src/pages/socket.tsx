// socket.ts
import { io } from "socket.io-client";

const socket = io('http://localhost:4005');

export default socket;