import Component from '../Component.js';
import MessageItem from './MessageItem.js';

class MessageList extends Component {

  render() {
    const dom = this.renderDOM();

    const messages = this.props.messages;
    const users = this.props.users;

    if(!messages || !users) {
      return dom;
    }

    messages.forEach(message => {

      users.forEach(user => {
        if(message.owner === user.uid) {
          message.owner = user;
        }
      });

      const messageItem = new MessageItem({ message });
      dom.appendChild(messageItem.render());
    });

    setTimeout(() => {
      dom.scrollTop = dom.scrollHeight;
    });

    return dom;
  }

  renderTemplate() {
    return /*html*/`
    <ul class="message-list">
    </ul>
    `;
  }
}

export default MessageList;