// frontend/src/js/websocket.js

const WebSocketManager = {
    socket: null,
    connect: function() {
        this.socket = new WebSocket('ws://localhost:8000/ws'); // Replace with your WebSocket URL

        this.socket.onopen = () => {
            console.log('WebSocket connected');
        };

        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log('WebSocket message received:', data);

            // Handle different message types
            if (data.type === 'task_update') {
                Tasks.updateTaskStatus(data.task_id, data.status);
            }
        };

        this.socket.onclose = () => {
            console.log('WebSocket disconnected');
            // Attempt to reconnect after a delay
            setTimeout(() => {
                this.connect();
            }, 3000); // Reconnect every 3 seconds
        };

        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    },
    send: function(message) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(message));
        } else {
            console.error('WebSocket not connected');
        }
    }
};
