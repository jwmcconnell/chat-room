import ChatApp from './ChatApp.js';

const root = document.getElementById('app');
const chatApp = new ChatApp();
root.appendChild(chatApp.render());
