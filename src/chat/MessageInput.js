import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class Header extends Component {

  render() {
    const dom = this.renderDOM();

    const room = this.props.room;
    const roomRef = this.props.roomRef;

    if(!room) {
      return dom;
    }

    const messagesRef = roomRef.child('messages');

    const messageInput = dom.querySelector('.message-input');

    dom.addEventListener('submit', event => {
      event.preventDefault();
      const messageRef = messagesRef.push();
      messageRef.set({
        message: messageInput.value,
        owner: auth.currentUser.uid
      }).then(() => {
        dom.reset();
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