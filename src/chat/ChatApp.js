import Component from '../Component.js';
import Header from '../shared/Header.js';
import MessageInput from './MessageInput.js';
import MessageList from './MessageList.js';

import QUERY from '../utils/QUERY.js';
import { roomsRef } from '../services/firebase.js';

class ChatApp extends Component {

  render() {
    const dom = this.renderDOM();

    const searchParams = QUERY.parse(window.location.search.slice(1));
    const roomRef = roomsRef.child(searchParams.key);

    const header = new Header({ title: 'Chat Room:' });

    const messageInput = new MessageInput({ room: null, roomRef });

    const messageList = new MessageList({ messages: [] });

    roomRef.on('value', snapshot => {
      const value = snapshot.val();
      header.update({ title: `Chat Room: ${value.name}` });
      messageInput.update({ room: value });
      const messages = value.messages ? Object.values(value.messages) : [];
      messageList.update({ messages });
    });

    const main = dom.querySelector('main');

    dom.prepend(header.render());

    main.appendChild(messageList.render());
    main.appendChild(messageInput.render());

    return dom;
  }

  renderTemplate() {
    return /*html*/`
        <div>
            <main></main>
        </div>
    `;
  }
}

export default ChatApp;