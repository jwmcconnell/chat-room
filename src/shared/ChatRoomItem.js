import Component from '../Component.js';
import { auth, roomsRef } from '../services/firebase.js';

class ChatRoomItem extends Component {

  render() {
    const dom = this.renderDOM();

    const room = this.props.room;

    const roomRef = roomsRef.child(room.key);

    const removeRoom = dom.querySelector('.remove-item');

    removeRoom.addEventListener('click', () => {
      if(room.owner === auth.currentUser.uid) {
        roomRef.remove();
      }
    });

    return dom;
  }

  renderTemplate() {
    const room = this.props.room;
    return /*html*/`
    <div class="item-wrapper">
      <a href="./chat.html#key=${room.key}">
        <li>
          <h2>${room.name}</h2>
        </li>
      </a>
      <button class="remove-item">X</button>
    </div>
     
    `;
  }
}

export default ChatRoomItem;