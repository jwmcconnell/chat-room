import AuthApp from './AuthApp.js';

const root = document.getElementById('app');
const authApp = new AuthApp();
root.appendChild(authApp.render());
