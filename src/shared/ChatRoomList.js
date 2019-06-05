import Component from '../Component.js';

class Header extends Component {
  renderTemplate() {
    return /*html*/`
      <ul>

        <a>
          <li>
            <h2>Royal Blood Chat</h2>
            <p>A room dedicated to discussing the band Royal Blood</p>
          </li>
        </a>

        <a>
          <li>
            <h2>Pink Floyd Chat</h2>
            <p>A room dedicated to discussing the band Pink FLoyd</p>
          </li>
        </a>

        <a>
          <li>
              <h2>Wolfmother Chat</h2>
              <p>A room dedicated to discussing the band Wolfmother</p>
          </li>
        </a>
      </ul>
    `;
  }
}

export default Header;