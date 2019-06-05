import Component from '../Component.js';

class ChatRoomItem extends Component {
  renderTemplate() {
    const room = this.props.room;
    return /*html*/`
    <div class="item-wrapper">
      <a href="./chat.html#key=${room.key}">
        <li>
          <h2>${room.name}</h2>
        </li>
      </a>
      <button class="remove-item">X</button>
    </div>
     
    `;
  }
}

export default ChatRoomItem;