import Component from '../Component.js';
import Profile from './Profile.js';

class Header extends Component {

  render() {
    const dom = this.renderDOM();

    const profile = new Profile();

    dom.appendChild(profile.render());

    return dom;
  }

  renderTemplate() {
    return /*html*/`
      <header>
        <h1>Chat Room</h1>
      </header>
    `;
  }
}

export default Header;