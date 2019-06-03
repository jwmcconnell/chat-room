import Component from '../Component.js';

class Profile extends Component {
  renderTemplate() {
    return /*html*/`
      <div class="profile">
        <img src="https://cdn10.bigcommerce.com/s-npe4l/products/1157/images/1335/B-MZ-SMSHD---HIGH__85441.1477602947.1280.1280.jpg?c=2" alt="Profile avatar">
        <span>Jack McConnell</span>
        <button>Sign Out</button>
      </div>
    `;
  }
}

export default Profile;