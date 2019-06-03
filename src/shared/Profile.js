import Component from '../Component.js';
import { auth } from '../services/firebase.js';


class Profile extends Component {

  render() {
    const dom = this.renderDOM();

    if(!this.props.user) {
      return dom;
    }

    const button = dom.querySelector('button');

    button.addEventListener('click', () => {
      auth.signOut();
    });

    return dom;
  }

  renderTemplate() {
    const user = this.props.user;

    if(!user) {
      return '<div></div>';
    }

    const avatar = user.photoURL || '../../assets/profile.png';
    return /*html*/`
      <div class="profile">
        <img src="${avatar}" alt="Profile avatar">
        <span>${user.displayName}</span>
        <button>Sign Out</button>
      </div>
    `;
  }
}

export default Profile;