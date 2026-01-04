// frontend/src/js/app.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Application started.');

    // Initialize WebSocket
    WebSocketManager.connect();

    // Initialize Chat
    Chat.initialize();

    // Initialize Tasks
    Tasks.initialize();

    // Initialize VPS Controls
    VPSControls.initialize();

});