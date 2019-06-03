import Component from '../Component.js';
import Header from '../shared/Header.js';
import { auth } from '../services/firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

class AuthApp extends Component {

  render() {
    const dom = this.renderDOM();

    const header = new Header();

    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: './',
      credentialHelper: firebaseui.auth.CredentialHelper.NONE
    });


    dom.prepend(header.render());

    return dom;
  }

  renderTemplate() {
    return /*html*/`
      <div>
        <main>
          <div id="firebaseui-auth-container"></div>
        </main>
      </div>
    `;
  }
}

export default AuthApp;