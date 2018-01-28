import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCcQM4DyPrqJskqO1yuKAJJgK2vtDLKEGk",
  authDomain: "expense-manager-a781d.firebaseapp.com",
  databaseURL: "https://expense-manager-a781d.firebaseio.com",
  projectId: "expense-manager-a781d",
  storageBucket: "expense-manager-a781d.appspot.com",
  messagingSenderId: "325691149023"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };