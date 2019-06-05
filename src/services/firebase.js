const config = {
  apiKey: 'AIzaSyCJVB70CcXzm9jopkxageRgKeo5cz-BUS4',
  authDomain: 'chat-room-e5f2a.firebaseapp.com',
  databaseURL: 'https://chat-room-e5f2a.firebaseio.com',
  projectId: 'chat-room-e5f2a',
  storageBucket: 'chat-room-e5f2a.appspot.com',
  messagingSenderId: '974879822629',
  appId: '1:974879822629:web:80ed9bf5cc3eeed4'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.database();

export const userCharRoomsRef = db.ref('userChatRooms');