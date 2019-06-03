import Component from '../Component.js';

class Profile extends Component {
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