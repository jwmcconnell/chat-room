import Component from '../Component.js';

class MessageOwner extends Component {

  renderTemplate() {
    const owner = this.props.owner;

    const avatar = owner.photoURL ? owner.photoURL : './assets/profile.png';

    return /*html*/`
      <section class="user">
        <img src="${avatar}" class="message-avatar">
        <span class="owner-name">${owner.displayName}:</span>
      </section>
      `;
  }
}

export default MessageOwner;