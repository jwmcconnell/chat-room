import Component from '../Component.js';
import { auth, messagesByRoomRef, usersByRoomRef } from '../services/firebase.js';

class Header extends Component {

  render() {
    const dom = this.renderDOM();

    const key = this.props.key;

    const messagesRef = messagesByRoomRef.child(key);
    const roomUsersRef = usersByRoomRef.child(key);

    const messageInput = dom.querySelector('.message-input');

    dom.addEventListener('submit', event => {
      event.preventDefault();
      const messageRef = messagesRef.push();
      messageRef.set({
        message: messageInput.value,
        owner: auth.currentUser.uid,
        date: new Date().toISOString()
      }).then(() => {
        dom.reset();
      });

      roomUsersRef
        .child(auth.currentUser.uid)
        .set({
          uid: auth.currentUser.uid
        });
    });

    return dom;
  }

  renderTemplate() {
    return /*html*/`
      <form class="message-form">
        <input class="message-input">
        <button>Submit</button>
      </form>
      `;
  }
}

export default Header;