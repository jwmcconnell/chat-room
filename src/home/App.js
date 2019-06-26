import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatRoomList from '../shared/ChatRoomList.js';
import AddChatRoom from '../shared/AddChatRoom.js';
import { roomsRef } from '../services/firebase.js';

class App extends Component {

  render() {
    const dom = this.renderDOM();

    const header = new Header();

    const chatRoomList = new ChatRoomList({ rooms: [] });

    const addChatRoom = new AddChatRoom();

    roomsRef.on('value', snapshot => {
      const value = snapshot.val();
      const rooms = value ? Object.values(value) : [];
      chatRoomList.update({ rooms });
    });

    const main = dom.querySelector('main');

    dom.prepend(header.render());

    main.appendChild(addChatRoom.render());
    main.appendChild(chatRoomList.render());

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

export default App;