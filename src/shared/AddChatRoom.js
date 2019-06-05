import Component from '../Component.js';
import { auth, roomsRef } from '../services/firebase.js';

class AddChatRoom extends Component {
  render() {
    const dom = this.renderDOM();

    const input = dom.querySelector('.chat-room-name');

    dom.addEventListener('submit', event => {
      event.preventDefault();
      if(input.value.trim()) {
        const roomRef = roomsRef.push();
        roomRef.set({
          key: roomRef.key,
          owner: auth.currentUser.uid,
          name: input.value,
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
          <input class="chat-room-description">
        </label>
        <button>Submit</button>
      </form>
    `;
  }
}

export default AddChatRoom;