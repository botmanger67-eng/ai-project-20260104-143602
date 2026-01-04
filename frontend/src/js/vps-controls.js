// frontend/src/js/vps-controls.js

const VPSControls = {
    initialize: function() {
        this.startButton = document.getElementById('start-vps');
        this.stopButton = document.getElementById('stop-vps');
        this.restartButton = document.getElementById('restart-vps');
        this.statusDisplay = document.getElementById('vps-status');

        this.startButton.addEventListener('click', () => {
            this.controlVPS('start');
        });

        this.stopButton.addEventListener('click', () => {
            this.controlVPS('stop');
        });

        this.restartButton.addEventListener('click', () => {
            this.controlVPS('restart');
        });
    },

    controlVPS: function(action) {
        // Simulate sending control command to backend
        this.statusDisplay.textContent = `Sending ${action} command...`;

        // Simulate a response after a delay
        setTimeout(() => {
            this.statusDisplay.textContent = `VPS ${action}ed successfully.`;
        }, 2000);

        // In a real implementation, you would send a request to the backend here
        // Example:
        // fetch('/api/vps/control', { method: 'POST', body: JSON.stringify({ action: action }) })
        //     .then(response => response.json())
        //     .then(data => this.statusDisplay.textContent = data.message);
    }
};
