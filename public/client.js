   
         
const socket = io();

// Redirect to home if username or room is missing
if (!sessionStorage.getItem('username') || !sessionStorage.getItem('room')) {
    window.location.href = '/';
}

// Display current user and room details
let newUser = document.createElement('div');
newUser.innerHTML = `
    <div class="username-room float-bottom d-flex ms-3 mb-0 pt-1 ">
       <p class="ms-2 mb-4">User- ${sessionStorage.getItem('username')}</p>         
       <p class="float-end me-3 ms-auto ">Room- ${sessionStorage.getItem('room')}</p>
    </div>`;

let parentUserRoom = document.getElementById("appname");
let existingUserRoom = parentUserRoom.querySelector(".usernameroom");

if (existingUserRoom) {
    parentUserRoom.replaceChild(newUser, existingUserRoom);
} else {
    console.error("Element with class 'usernameroom' not found.");
}

// Logout functionality
let logbtn = document.getElementById('logout');
logbtn.addEventListener('click', (e) => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('room');
    window.location.href = '/';
});

// Join the room
const username = sessionStorage.getItem('username');
const room = sessionStorage.getItem('room');
socket.emit('joinRoom', { username, room });

// Message sending functionality
let btn = document.getElementById('tsend');
btn.addEventListener('click', sendNpt);
let messageArea = document.querySelector('.massageArea');

function sendNpt(e) {
    e.preventDefault();
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;

    let msg = {
        user: username,
        room: room, // Include room in the message
        message: currentInput.value.trim(),
    };

    currentInput.value = "";
    appendMessage(msg, "outgoing");
    scrollToBottom();

    // Send to server
    socket.emit('message', msg);
}

// Append message to the chat area
function appendMessage(msg, type) {
    let newDiv = document.createElement("div");

    newDiv.classList.add("massage", type);
    newDiv.innerHTML = `
       <h4 class="${type}User">${msg.user}</h4>
        <p>${msg.message}</p>
    `;
    messageArea.appendChild(newDiv);
}

// Receive messages
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming');
    scrollToBottom();
});

// Scroll to the bottom of the chat area
function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}


