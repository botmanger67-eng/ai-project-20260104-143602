// frontend/src/js/chat.js

const Chat = {
    initialize: function() {
        this.chatInput = document.getElementById('chat-input');
        this.chatMessages = document.getElementById('chat-messages');
        this.chatSendButton = document.getElementById('chat-send-button');

        this.chatSendButton.addEventListener('click', () => {
            this.sendMessage();
        });

        this.chatInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.sendMessage();
            }
        });
    },

    sendMessage: function() {
        const messageText = this.chatInput.value.trim();
        if (messageText !== '') {
            // Simulate sending message to backend
            this.addMessage('You', messageText);
            //For now add the openAI response here
            this.addMessage('Assistant', 'This is an openAI response');
            this.chatInput.value = ''; // Clear input

            // Send message to backend via WebSocket (if needed)
            // WebSocketManager.send({ type: 'chat_message', text: messageText });
        }
    },

    addMessage: function(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        this.chatMessages.appendChild(messageElement);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight; // Scroll to bottom
    }
};
