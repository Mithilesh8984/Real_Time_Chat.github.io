# Real-Time Chat Application

A real-time chat application built with **Node.js**, **Express**, and **Socket.IO**. This application enables users to send and receive messages instantly, providing a seamless chat experience similar to popular messaging apps.


## Features

- **Real-Time Communication**: Messages are sent and received instantly using WebSockets.
- **Broadcast Messages**: Messages are broadcast to all connected users.
- **Responsive User Interface**: Simple and clean UI that works on various screen sizes.
- **User Notifications**: Notify users when someone joins or leaves the chat.
- **Scalable Architecture**: Easy to scale with additional features like private chats, rooms, etc.

## Getting Started

Follow these steps to set up and run the application on your local machine.
* start the server
    node server.js    on terminal
* search on brouser
    https://localhost:3000   # localhost:{Port No}

### Prerequisites

- [Node.js](v14 or higher)
- [npm](Node Package Manager)
* npm install express socket.io


***Clone the repository:***
   git clone https://github.com/Mithilesh8984/Real_Time_Chat.github.io
   cd Real_Time_Chat

****Explaination on Youtube****
        https://youtu.be/-XXwME1PIk4?si=ZTQnpCZKP5ULtJH4

### Explaination
    realtime-chat-app/
    ├── public/
    │   ├── style.css         # For styling the HTML pages
    │   └── client.js         # Handles client-side logic, message sending, and displaying username after login
    ├── server.js             # Main server file (Backend logic)
    ├── package.json          # NPM dependencies and scripts
    ├── README.md             # Project documentation
    ├── index.html            # Frontend HTML file for the login page
    └── chat.html             # Frontend HTML file for the chat section after login

    1. *server.js*
        The server.js file contains the backend logic for the chat application. It uses Express to serve static files and Socket.IO to handle real-time communication between clients.
    2. *public/style.css*
        The style.css file contains CSS styles for both the login page (index.html) and the chat page (chat.html). It is used to give color, layout, and overall visual styling to the HTML pages.
    3. *public/client.js*
        The client.js file is responsible for the client-side logic, including connecting to the server using Socket.IO, sending messages, and displaying the username after the user logs in.
    4. *index.html*
        The index.html file is the login page that allows users to enter their username before they can access the chat room. Upon login, it redirects the user to the chat.html page
    5. *chat.html*
        The chat.html file is the chat room interface where users can send messages and see other users' messages after logging in. It displays the chat interface and utilizes the client.js script to handle chat operations.
    6. *package.json*
        The package.json file defines the dependencies and scripts required to run the application. It includes Express and Socket.IO as dependencies.
    7. *README.md*
        The README.md file provides an overview of the project, setup instructions, and usage guidelines.

###   Enhancements and Future Scope
    1. User Authentication: Integrate user authentication to allow registered users to join the chat.
    2. Private Messaging: Add support for private messages or chat rooms.
    3. Message Persistence: Store chat messages in a database like MongoDB for future reference.
    4. Typing Indicators: Show indicators when users are typing.
    5. Improved UI/UX: Use a frontend framework like React.js or Vue.js for a more dynamic and
       user-friendly interface.


### Functionality
    
    1. **Backend Functions (server.js)**:
        *Server Setup*: Sets up an HTTP server using `express` and integrates `Socket.IO` to handle WebSocket connections.
        *Client Serving*: Serves the client-side HTML file when a user accesses the root URL.
        *Socket.IO Events*:
        *Connection/Disconnection Events*: Logs when a user connects or disconnects and broadcasts a message to all users.
        *Message Event*: Listens for `chat message` events from clients and broadcasts the message to all connected clients.

    2. **Frontend Functions (index.html)**:
        *Socket Connection*: Establishes a connection to the server using `Socket.IO` on the client side.
        *Form Handling*: Listens for the form submission event to capture user input and emit a `chat message` event to the server.
        *Message Display*: Listens for `chat message` events from the server and dynamically updates the chat window with the new message.

    This `README.md` provides a comprehensive overview of the application's setup, usage, functionality, and potential enhancements, making it easier for others to understand and contribute to the project.
