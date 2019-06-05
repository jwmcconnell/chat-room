import Component from '../Component.js';
import Header from '../shared/Header.js';

import QUERY from '../utils/QUERY.js';
import { roomsRef } from '../services/firebase.js';

class ChatApp extends Component {

  render() {
    const dom = this.renderDOM();

    const header = new Header({ title: 'Chat Room:' });

    const searchParams = QUERY.parse(window.location.search.slice(1));

    console.log(searchParams);

    const roomRef = roomsRef.child(searchParams.key);

    roomRef.on('value', snapshot => {
      const value = snapshot.val();
      header.update({ title: `Chat Room: ${value.name}` });
    });

    dom.prepend(header.render());

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