import Component from '../Component.js';
import Header from '../shared/Header.js';
import MessageInput from './MessageInput.js';
import MessageList from './MessageList.js';

import QUERY from '../utils/QUERY.js';
import { roomsRef, messagesByRoomRef } from '../services/firebase.js';

class ChatApp extends Component {

  render() {
    const dom = this.renderDOM();

    const searchParams = QUERY.parse(window.location.search.slice(1));

    const roomMessagesRef = messagesByRoomRef.child(searchParams.key);
    const roomRef = roomsRef.child(searchParams.key);

    const header = new Header({ title: 'Chat Room:' });

    const messageInput = new MessageInput({ key: searchParams.key });

    const messageList = new MessageList({ messages: [] });

    roomMessagesRef.on('value', snapshot => {
      const value = snapshot.val();

      const messages = value ? Object.values(value) : [];
      messageList.update({ messages });
    });

    roomRef.on('value', snapshot => {
      const value = snapshot.val();
      header.update({ title: `Chat Room: ${value.name}` });
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