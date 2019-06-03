import Component from '../Component.js';
import Header from '../shared/Header.js';

class AuthApp extends Component {

  render() {
    const dom = this.renderDOM();

    const header = new Header();

    dom.prepend(header.render());

    return dom;
  }

  renderTemplate() {
    return /*html*/`
      <div>
        <main>Auth Page</main>
      </div>
    `;
  }
}

export default AuthApp;