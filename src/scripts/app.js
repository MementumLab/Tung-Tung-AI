import { conversations, messages, suggestions } from '../data/conversations.js';

const chatList = document.querySelector('#chat-list');
const messageList = document.querySelector('#message-list');
const composer = document.querySelector('#composer');
const messageInput = document.querySelector('#message-input');
const suggestionsContainer = document.querySelector('.suggestions');

function renderConversations() {
  chatList.innerHTML = conversations
    .map(
      (conversation) => `
        <button class="chat-item ${conversation.active ? 'active' : ''}" type="button">
          <strong>${conversation.title}</strong>
          <span>${conversation.preview}</span>
        </button>
      `,
    )
    .join('');
}

function renderMessages() {
  messageList.innerHTML = messages
    .map(
      (message) => `
        <article class="message ${message.role}">
          <div class="message-meta">
            <strong>${message.role === 'assistant' ? 'Tung Tung Tung Sahur' : 'You'}</strong>
            <span>${message.time}</span>
          </div>
          <p>${message.text}</p>
        </article>
      `,
    )
    .join('');
}

function renderSuggestions() {
  suggestionsContainer.innerHTML = suggestions
    .map((suggestion) => `<button class="chip" type="button">${suggestion}</button>`)
    .join('');
}

function appendMessage(text) {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const message = document.createElement('article');
  message.className = 'message user';
  message.innerHTML = `
    <div class="message-meta">
      <strong>You</strong>
      <span>${time}</span>
    </div>
    <p>${text}</p>
  `;

  messageList.append(message);
  messageList.scrollTop = messageList.scrollHeight;
}

chatList.addEventListener('click', (event) => {
  const selected = event.target.closest('.chat-item');
  if (!selected) {
    return;
  }

  chatList.querySelectorAll('.chat-item').forEach((item) => item.classList.remove('active'));
  selected.classList.add('active');
});

suggestionsContainer.addEventListener('click', (event) => {
  const chip = event.target.closest('.chip');
  if (!chip || !messageInput) {
    return;
  }

  messageInput.value = chip.textContent || '';
  messageInput.focus();
});

composer.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = messageInput.value.trim();
  if (!text) {
    return;
  }

  appendMessage(text);
  messageInput.value = '';
});

renderConversations();
renderMessages();
renderSuggestions();
