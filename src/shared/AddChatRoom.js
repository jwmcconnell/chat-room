import Component from '../Component.js';
import { auth, roomsRef } from '../services/firebase.js';

class AddChatRoom extends Component {
  render() {
    const dom = this.renderDOM();

    const input = dom.querySelector('.chat-room-name');

    dom.addEventListener('submit', event => {
      event.preventDefault();
      const roomRef = roomsRef.push();
      roomsRef.child(roomRef.key).set({
        key: roomRef.key,
        owner: auth.currentUser.uid,
        name: input.value,
      })
        .then(() => {
          dom.reset();
        });
    });

    return dom;
  }

  renderTemplate() {
    return /*html*/`
      <form class="add-room">
        <label>Create a Chat Room:
          <input class="chat-room-name">
        </label>
        <button>Submit</button>
      </form>
    `;
  }
}

export default AddChatRoom;