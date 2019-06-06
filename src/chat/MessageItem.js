import Component from '../Component.js';

class MessageList extends Component {

  renderTemplate() {
    const message = this.props.message;
    return /*html*/`
      <li>
        <span>${message.displayName}:</span>
        <span>${message.message}</span>
      </li>
    `;
  }
}

export default MessageList;