const express = require('express'); // Load Express
const app = express(); // Create an Express app
const http = require('http').createServer(app); // Create an HTTP server using Express
const PORT = process.env.PORT || 3000; // Define a port to listen on (default 3000)

// Start the server
http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.static(__dirname + '/public')); // Serve static files from the 'public' folder

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Serve 'index.html' for '/'
});

// Route for the chat page
app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/chat.html'); // Serve 'chat.html' for '/chat'
});


// //Socket
// const io=require('socket.io')(http);
// io.on('connection',(socket)=>{
//     console.log("connected...")
//     socket.on('message',(msg)=>{
//        // console.log(msg)
       
//         socket.broadcast.emit('message',msg);
//     })
    
   
    
// })




// Socket.IO for room-based communication
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle user joining a room
    socket.on('joinRoom', ({ username, room }) => {
        socket.username = username; // Attach username to the socket
        socket.room = room; // Attach room to the socket
        socket.join(room);

        console.log(`${username} joined room: ${room}`);

        // Notify others in the room about the new user
        socket.to(room).emit('message', {
            user: 'System',
            message: `${username} has joined the room.`,
        });
    });

    // Handle sending messages
    socket.on('message', (msg) => {
        const { user, room, message } = msg;

        // Broadcast message only to others in the same room
        socket.to(room).emit('message', { user, message });
    });

    // Handle user disconnecting
    socket.on('disconnect', () => {
        if (socket.username && socket.room) {
            console.log(`${socket.username} disconnected from room: ${socket.room}`);

            // Notify others in the room about the disconnection
            socket.to(socket.room).emit('message', {
                user: 'System',
                message: `${socket.username} has left the room.`,
            });
        }
    });
});
