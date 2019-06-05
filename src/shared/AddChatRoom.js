import Component from '../Component.js';
import { auth, roomsRef } from '../services/firebase.js';

class AddChatRoom extends Component {
  render() {
    const dom = this.renderDOM();

    const roomName = dom.querySelector('.chat-room-name');
    const roomDescription = dom.querySelector('.chat-room-description');

    dom.addEventListener('submit', event => {
      event.preventDefault();
      if(roomName.value.trim() && roomDescription.value.trim()) {
        const roomRef = roomsRef.push();
        roomRef.set({
          key: roomRef.key,
          owner: auth.currentUser.uid,
          name: roomName.value,
          description: roomDescription.value
        })
          .then(() => {
            dom.reset();
          });
      }
    });

    return dom;
  }

  renderTemplate() {
    return /*html*/`
      <form class="add-room">
        <h2>Create a Chat Room</h2>
        <label>Name:
          <input class="chat-room-name">
        </label>
        <label>Description:
          <textarea class="chat-room-description"></textarea>
        </label>
        <button>Submit</button>
      </form>
    `;
  }
}

export default AddChatRoom;