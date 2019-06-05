import Component from '../Component.js';

class ChatRoomItem extends Component {
  renderTemplate() {
    const room = this.props.room;
    return /*html*/`
      <a href="./chat.html#key=${room.key}">
        <li>
          <h2>${room.name}</h2>
        </li>
      </a>
    `;
  }
}

export default ChatRoomItem;