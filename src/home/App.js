import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatRoomList from '../shared/ChatRoomList.js';

class App extends Component {

  render() {
    const dom = this.renderDOM();

    const header = new Header();

    const chatRoomList = new ChatRoomList();

    const main = dom.querySelector('main');

    dom.prepend(header.render());

    main.appendChild(chatRoomList.render());

    return dom;
  }

  renderTemplate() {
    return /*html*/`
        <div>
            <main></main>
        </div>
    `;
  }
}

export default App;