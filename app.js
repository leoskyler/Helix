document.getElementById('send-btn').addEventListener('click', sendMessage);

async function sendMessage() {
    const input = document.getElementById('user-input');
    const chatHistory = document.getElementById('chat-history');
    const userText = input.value;

    if (!userText) return;

    // Display user message
    chatHistory.innerHTML += `<div class="text-right text-blue-300">You: ${userText}</div>`;
    input.value = '';

    // Puter AI request
    const response = await puter.ai.chat(userText);

    // Display AI response
    chatHistory.innerHTML += `<div class="text-gray-200">Helix: ${response}</div>`;
    chatHistory.scrollTop = chatHistory.scrollHeight;
}
