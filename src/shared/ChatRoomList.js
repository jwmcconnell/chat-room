import Component from '../Component.js';
import ChatRoomItem from './ChatRoomItem.js';

class ChatRoomList extends Component {
  render() {
    const dom = this.renderDOM();

    const rooms = this.props.rooms;

    rooms.forEach(room => {
      const chatRoomItem = new ChatRoomItem({ room });
      dom.appendChild(chatRoomItem.render());
    });

    return dom;
  }
  renderTemplate() {
    return /*html*/`
      <ul></ul>
    `;
  }
}

export default ChatRoomList;