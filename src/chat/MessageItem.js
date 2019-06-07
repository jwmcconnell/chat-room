import Component from '../Component.js';

class MessageList extends Component {

  renderTemplate() {
    const message = this.props.message;
    const owner = message.owner;

    const avatar = owner.photoURL ? owner.photoURL : './assets/profile.png';

    return /*html*/`
      <li class="message">
        <section class="user">
          <img src="${avatar}" class="message-avatar">
          <span>${owner.displayName}:</span>
        </section>
        <span>${message.message}</span>
      </li>
    `;
  }
}

export default MessageList;