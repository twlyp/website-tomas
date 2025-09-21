import { initializeApp } from "firebase/app"
import { connectAuthEmulator, getAuth } from "firebase/auth"
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"
import { connectStorageEmulator, getStorage, ref as storageRef } from "firebase/storage"
import {
  PUBLIC_FIREBASE_API_KEY,
  PUBLIC_FIREBASE_APP_ID,
  PUBLIC_FIREBASE_AUTH_DOMAIN,
  PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  PUBLIC_FIREBASE_PROJECT_ID,
  PUBLIC_FIREBASE_STORAGE_BUCKET,
  PUBLIC_USE_EMULATORS,
} from "$env/static/public"

const firebaseConfig = {
  apiKey: PUBLIC_FIREBASE_API_KEY,
  authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: PUBLIC_FIREBASE_APP_ID,
}

export const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

if (import.meta.env.DEV && PUBLIC_USE_EMULATORS === "true") {
  connectAuthEmulator(auth, "http://localhost:9099")
  connectFirestoreEmulator(firestore, "localhost", 8080)
  connectStorageEmulator(storage, "localhost", 9199)
}

export const getImageRef = (id: string) => storageRef(storage, `images/${id}`)