import { app } from '../src/services/firebase.js';
import './html-equal.js';
// import utilities and custom assertions
import './html-equal.test.js';
import './html-to-DOM.test.js';
import './Profile.test.js';

QUnit.done(() => {
  app.delete();
}); 
