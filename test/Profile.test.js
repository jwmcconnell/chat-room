import Profile from '../src/shared/Profile.js';
const test = QUnit.test;

QUnit.module('Profile');

test('Creates profile from template', (assert) => {
  const user = {
    displayName: 'Jack McConnell',
    photoURL: 'https://cdn10.bigcommerce.com/s-npe4l/products/1157/images/1335/B-MZ-SMSHD---HIGH__85441.1477602947.1280.1280.jpg?c=2'
  };

  const expected = /*html*/`
    <div class="profile">
      <img src="https://cdn10.bigcommerce.com/s-npe4l/products/1157/images/1335/B-MZ-SMSHD---HIGH__85441.1477602947.1280.1280.jpg?c=2" alt="Profile avatar">
      <span>Jack McConnell</span>
      <button>Sign Out</button>
    </div>
  `;

  const profile = new Profile({ user });
  const rendered = profile.renderTemplate();

  assert.htmlEqual(rendered, expected);
});

test('Creates profile from template without photo', (assert) => {
  const user = {
    displayName: 'Jack McConnell',
    photoURL: ''
  };

  const expected = /*html*/`
    <div class="profile">
      <img src="../../assets/profile.png" alt="Profile avatar">
      <span>Jack McConnell</span>
      <button>Sign Out</button>
    </div>
  `;

  const profile = new Profile({ user });
  const rendered = profile.renderTemplate();

  assert.htmlEqual(rendered, expected);
});

test('Returns an empty div when the user object is null', (assert) => {
  const user = null;

  const expected = /*html*/`
    <div></div>
  `;

  const profile = new Profile({ user });
  const rendered = profile.renderTemplate();

  assert.htmlEqual(rendered, expected);
});