import React, { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import MessageInput from './MessageInput';
import UserList from './UserList';
import { axiosClient } from './libraries/axiosClient';

const ChatRoom = () => {
  const [connection, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [roomId] = useState(1); // Room ID cố định
  const [userId] = useState("b73a63d5-3162-4c47-8435-9aa732fd5a6e"); // User ID cố định
  

  useEffect(() => {
    // Tạo kết nối SignalR
    const connect = new HubConnectionBuilder()
      .withUrl("https://localhost:44353/chat")  // Đảm bảo URL đúng
      .withAutomaticReconnect()
      .build();

    setConnection(connect);

    return () => {
      if (connect) connect.stop();
    };
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start()
        .then(() => {
          console.log("Connected to SignalR!");

          // Gọi phương thức JoinRoom để tham gia phòng
          connection.invoke("JoinRoom", roomId, userId)
            .catch((err) => console.error("Error while joining room: ", err));

          // Lắng nghe sự kiện nhận tin nhắn
          connection.on("ReceiveMessage", (sender, message) => {
            setMessages((prevMessages) => [...prevMessages, { sender, message }]);
          });

          // Lắng nghe sự kiện người dùng trong phòng
          connection.on("UsersInRoom", (usersInRoom) => {
            setUsers(usersInRoom);
          });
        })
        .catch((error) => console.error("Connection failed: ", error));
    }
  }, [connection, roomId, userId]);

  const sendMessage = async (message) => {
    if (connection) {
      await connection.invoke("SendMessage", message);
    }
  };


  const loadMessages = async () => {   
      const data =  await axiosClient.get(`/api/Messages/room/${roomId}`)
        const messages = await data.json();
        setMessages(messages);
    }
    useEffect(() => {
      loadMessages();
    }, 
      messages);


  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <h2>Room: {roomId}</h2>
      <UserList users={users} />
      <div style={{ flex: 1, overflowY: "auto", padding: "10px", border: "1px solid #ccc" }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}: </strong>{msg.message}
            
          </div>
        ))}
      </div>
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatRoom;