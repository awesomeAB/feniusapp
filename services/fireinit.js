import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyCROqdGLsOQq16mfZaQ9RbO28wqMqcZYGA",
    authDomain: "fenius2019.firebaseapp.com",
    databaseURL: "https://fenius2019.firebaseio.com",
    projectId: "fenius2019",
    storageBucket: "fenius2019.appspot.com",
    messagingSenderId: "498526659847"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase