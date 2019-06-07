import Component from '../Component.js';
import Header from '../shared/Header.js';
import MessageInput from './MessageInput.js';
import MessageList from './MessageList.js';

import QUERY from '../utils/QUERY.js';
import { roomsRef, usersRef, messagesByRoomRef, usersByRoomRef } from '../services/firebase.js';

class ChatApp extends Component {

  render() {
    const dom = this.renderDOM();

    const searchParams = QUERY.parse(window.location.search.slice(1));

    const roomMessagesRef = messagesByRoomRef.child(searchParams.key);
    const roomUsersRef = usersByRoomRef.child(searchParams.key);
    const roomRef = roomsRef.child(searchParams.key);

    const header = new Header({ title: 'Chat Room:' });

    const messageInput = new MessageInput({ key: searchParams.key });

    const messageList = new MessageList({ messages: [] });

    roomMessagesRef.on('value', snapshot => {
      const value = snapshot.val();

      const messages = value ? Object.values(value) : [];
      messageList.update({ messages });

      // let activeUsers = value.activeUsers ? Object.values(value.activeUsers) : [];

      // updateUsers(activeUsers)
      //   .then((response) => {

      //   });
    });

    roomUsersRef.on('value', snapshot => {
      const value = snapshot.val();

      let activeUsers = value ? Object.values(value) : [];

      updateUsers(activeUsers)
        .then((users) => {
          messageList.update({ users });
        });
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

function updateUsers(activeUsers) {
  const promises = activeUsers.map(activeUser => {
    return new Promise((resolve) => {
      const userRef = usersRef.child(activeUser.uid);
      userRef.on('value', snapshot => {
        const value = snapshot.val();
        resolve(value);
      });
    });
  });
  return Promise.all(promises);
}