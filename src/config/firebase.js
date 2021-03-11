import firebase from 'firebase/app'
import 'firebase/storage'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAmcF4l-LMTfDBw_Q2QOSYLogZwKqzzDck',
  authDomain: 'react-firegram-233a5.firebaseapp.com',
  projectId: 'react-firegram-233a5',
  storageBucket: 'react-firegram-233a5.appspot.com',
  messagingSenderId: '1002105556010',
  appId: '1:1002105556010:web:ab4a5e7325a199ed59c753',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const projectStorage = firebase.storage()
export const projectFilesStorage = firebase.filestore
