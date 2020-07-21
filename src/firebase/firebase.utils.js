import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyC1aZRb96W11B9yqHP6EvKCc7WesAYny6A',
  authDomain: 'crwn-db-615ff.firebaseapp.com',
  databaseURL: 'https://crwn-db-615ff.firebaseio.com',
  projectId: 'crwn-db-615ff',
  storageBucket: 'crwn-db-615ff.appspot.com',
  messagingSenderId: '765785664853',
  appId: '1:765785664853:web:996120e5316832fd55d3dc',
  measurementId: 'G-651VWH48P9',
}

// firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
