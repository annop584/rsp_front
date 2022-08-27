import React, { useState } from "react";
import { io } from "socket.io-client";
const socket = io(process.env.NEXT_PUBLIC_ENDPOINT as string);
export default function Home() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [message, setMessage] = useState<string[]>([]);
  const handlepost = () => {
    socket.emit("msgToServer", name);
  };

  socket.on("msgToClient", (data) => {
    setId(data);
  });
  socket.on("msgToClient", (data) => {
    setMessage([...message, data]);
  });
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handlepost}>Send massage </button>
      <p>Recive messagez {id}</p>
      {message.map((p, index) => (
        <li key={index}>{p}</li>
      ))}
    </div>
  );
}
