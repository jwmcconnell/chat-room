import Component from '../Component.js';
import Header from '../shared/Header.js';

class App extends Component {

  render() {
    const dom = this.renderDOM();

    const header = new Header();

    dom.prepend(header.render());

    return dom;
  }

  renderTemplate() {
    return /*html*/`
        <div>
            <main>
            Place Holder Text
            </main>
        </div>
    `;
  }
}

export default App;