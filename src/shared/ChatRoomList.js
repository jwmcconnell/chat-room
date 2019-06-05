import Component from '../Component.js';

class ChatRoomList extends Component {
  renderTemplate() {
    return /*html*/`
      <ul>

        <a href="./chat.html">
          <li>
            <h2>Royal Blood Chat</h2>
            <p>A room dedicated to discussing the band Royal Blood</p>
          </li>
        </a>

        <a href="./chat.html">
          <li>
            <h2>Pink Floyd Chat</h2>
            <p>A room dedicated to discussing the band Pink FLoyd</p>
          </li>
        </a>

        <a href="./chat.html">
          <li>
              <h2>Wolfmother Chat</h2>
              <p>A room dedicated to discussing the band Wolfmother</p>
          </li>
        </a>
      </ul>
    `;
  }
}

export default ChatRoomList;