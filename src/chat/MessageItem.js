import Component from '../Component.js';
import MessageOwner from './MessageOwner.js';
import { usersRef } from '../services/firebase.js';

class MessageList extends Component {

  render() {
    const dom = this.renderDOM();

    const owner = this.props.message.owner;

    const userRef = usersRef.child(owner);

    if(!owner) {
      return '<div></div>';
    }

    userRef.on('value', snapshot => {
      const value = snapshot.val();
      const messageOwner = new MessageOwner({ owner: value });
      dom.prepend(messageOwner.render());
    });

    return dom;
  }

  renderTemplate() {
    const message = this.props.message;

    if(!message.date) {
      return '<div></div>';
    }
    const date = new Date(message.date);

    return /*html*/`
      <li class="message">
      <span>${message.message}</span>
      <span class="message-date">${date.toLocaleDateString()} ${date.toLocaleTimeString()}</span>
      </li>
    `;
  }
}

export default MessageList;